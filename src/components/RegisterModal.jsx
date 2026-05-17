import { useEffect, useState } from "react"

const RAZORPAY_KEY_ID = import.meta.env.VITE_RAZORPAY_KEY_ID || "rzp_test_SpBojobeGiu9AR"
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzOYfHvX_USSZUb8douaYGtKbW6eLD3NN4xLWBKtNmL4qyXpdE4eK5HI1Vp6huNpV3d/exec"

const courses = [
    "Starter Plan – 30 Days (₹9,999)",
    "AI Digital Marketing – 100 Days (₹35,000)",
    "Premium Workshop – 1 Day (₹999)",
]

function testDoPost() {
    const fakeEvent = {
        postData: {
            contents: JSON.stringify({
                name: "Test User",
                email: "test@example.com",
                phone: "9876543210",
                course: "Starter Plan – 30 Days (₹9,999)",
                paymentId: "pay_TEST123456",
                amount: "₹500"
            })
        }
    }
    const result = doPost(fakeEvent)
    Logger.log(result.getContent())
}

const RegisterModal = ({ onClose }) => {
    const [step, setStep] = useState(1) // 1 = Form, 2 = Instructions
    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState({ name: "", email: "", phone: "", course: "" })
    const [errors, setErrors] = useState({})

    useEffect(() => {
        document.body.style.overflow = "hidden"
        if (!window.Razorpay) {
            const script = document.createElement("script")
            script.src = "https://checkout.razorpay.com/v1/checkout.js"
            script.async = true
            document.body.appendChild(script)
        }
        return () => { document.body.style.overflow = "auto" }
    }, [])

    const validate = () => {
        const e = {}
        if (!form.name.trim()) e.name = "Name is required"
        if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Valid email is required"
        if (!form.phone.trim() || !/^[6-9]\d{9}$/.test(form.phone)) e.phone = "Valid 10-digit phone is required"
        if (!form.course) e.course = "Please select a course"
        setErrors(e)
        return Object.keys(e).length === 0
    }

    const handleNext = () => {
        if (validate()) setStep(2)
    }

    const saveToSheet = async (paymentId) => {
        try {
            await fetch(APPS_SCRIPT_URL, {
                method: "POST",
                mode: "no-cors",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...form, paymentId }),
            })
        } catch (err) {
            console.error("Sheet save error:", err)
        }
    }

    const handlePayment = () => {
        if (!window.Razorpay) {
            alert("Razorpay SDK not loaded. Please check your internet connection.")
            return
        }

        setLoading(true)

        const options = {
            key: RAZORPAY_KEY_ID,
            amount: 50000,        // 500 in paise
            currency: "INR",
            name: "Seyontech Digital Marketing",
            description: "Admission Fees",
            prefill: {
                name: form.name,
                email: form.email,
                contact: form.phone,
            },
            handler: async function (response) {
                setLoading(false)
                await saveToSheet(response.razorpay_payment_id)
                onClose()
                alert(`Registration Successful! 🎉\nPayment ID: ${response.razorpay_payment_id}\n\nWelcome to Seyontech! Our team will contact you shortly.`)
            },
            modal: {
                ondismiss: function () { setLoading(false) }
            },
            notes: { course: form.course },
            theme: { color: "#6d28d9" },
        }

        const rzp = new window.Razorpay(options)
        rzp.on("payment.failed", function (response) {
            setLoading(false)
            alert(`Payment Failed: ${response.error.description}`)
        })
        rzp.open()
    }

    return (
        <>
            <style>{`
        .rm-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.65);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 99999;
          padding: 16px;
        }
        .rm-box {
          background: #fff;
          border-radius: 20px;
          padding: 32px 28px 28px;
          max-width: 460px;
          width: 100%;
          position: relative;
          animation: rmPopIn 0.3s ease;
          max-height: 90vh;
          overflow-y: auto;
        }
        @keyframes rmPopIn {
          from { transform: scale(0.88); opacity: 0; }
          to   { transform: scale(1);    opacity: 1; }
        }
        .rm-close {
          position: absolute;
          top: 14px; right: 16px;
          background: #f5f5f5;
          border: none;
          border-radius: 50%;
          width: 32px; height: 32px;
          font-size: 16px;
          cursor: pointer;
          color: #555;
          display: flex; align-items: center; justify-content: center;
        }
        .rm-close:hover { background: #eee; color: #111; }
        .rm-badge {
          display: inline-block;
          background: #ede9fe;
          color: #0d6efd;
          font-size: 11px;
          font-weight: 700;
          padding: 4px 14px;
          border-radius: 20px;
          margin-bottom: 12px;
          letter-spacing: 0.8px;
        }
        .rm-title {
          font-size: 22px;
          font-weight: 700;
          color: #111;
          margin-bottom: 4px;
        }
        .rm-subtitle {
          font-size: 13px;
          color: #777;
          margin-bottom: 20px;
        }
        .rm-steps {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 24px;
        }
        .rm-step {
          display: flex; align-items: center; gap: 6px;
          font-size: 12px; font-weight: 600;
        }
        .rm-step-num {
          width: 24px; height: 24px;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 12px; font-weight: 700;
        }
        .rm-step.active .rm-step-num  { background: #0d6efd; color: white; }
        .rm-step.done .rm-step-num    { background: #ede9fe; color: #0d6efd; }
        .rm-step.inactive .rm-step-num { background: #f0f0f0; color: #aaa; }
        .rm-step.active span  { color: #0d6efd; }
        .rm-step.inactive span { color: #aaa; }
        .rm-step-line { flex: 1; height: 2px; background: #e0e0e0; border-radius: 2px; }
        .rm-step-line.done { background: #0d6efd; }
        .rm-field { margin-bottom: 16px; }
        .rm-label {
          display: block;
          font-size: 13px;
          font-weight: 600;
          color: #444;
          margin-bottom: 6px;
        }
        .rm-input, .rm-select {
          width: 100%;
          padding: 11px 14px;
          border: 1.5px solid #e0e0e0;
          border-radius: 10px;
          font-size: 14px;
          color: #111;
          outline: none;
          transition: border 0.2s;
          background: #fff;
          box-sizing: border-box;
        }
        .rm-input:focus, .rm-select:focus { border-color: #0d6efd; }
        .rm-input.err, .rm-select.err { border-color: #0d6efd; }
        .rm-error { font-size: 11px; color: #0d6efd; margin-top: 4px; }
        .rm-list {
          list-style: none;
          padding: 0;
          margin: 0 0 20px 0;
        }
        .rm-list li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 14px;
          color: #333;
          line-height: 1.6;
          padding: 10px 0;
          border-bottom: 1px solid #f0f0f0;
        }
        .rm-list li:last-child { border-bottom: none; }
        .rm-check {
          min-width: 22px; height: 22px;
          background: #ede9fe;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 12px; color: #6d28d9; font-weight: 700;
          margin-top: 1px;
        }
        .rm-fee-box {
          background: #faf5ff;
          border: 1.5px solid #ddd6fe;
          border-radius: 14px;
          padding: 16px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }
        .rm-fee-label  { font-size: 14px; color: #444; font-weight: 600; }
        .rm-fee-note   { font-size: 11px; color: #999; margin-top: 3px; }
        .rm-fee-amount { font-size: 28px; font-weight: 800; color: #6d28d9; }
        .rm-btn {
          width: 100%;
          padding: 14px;
          border-radius: 30px;
          border: none;
          background: #0d6efd;
          color: white;
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
          letter-spacing: 0.4px;
          transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
        }
        .rm-btn:hover {
          background: #0d6efd;
          transform: scale(1.02);
          box-shadow: 0 6px 20px rgba(109,40,217,0.35);
        }
        .rm-btn:disabled { background: #0d6efd; cursor: not-allowed; transform: none; }
        .rm-back {
          background: none; border: none;
          color: #6d28d9; font-size: 13px;
          cursor: pointer; margin-bottom: 16px;
          padding: 0; font-weight: 600;
          display: block;
        }
        .rm-back:hover { text-decoration: underline; }
        .rm-secure {
          text-align: center; font-size: 12px;
          color: #bbb; margin-top: 12px;
        }
      `}</style>

            <div className="rm-overlay" onClick={onClose}>
                <div className="rm-box" onClick={(e) => e.stopPropagation()}>

                    <button className="rm-close" onClick={onClose}>✕</button>
                    <div className="rm-badge">LIMITED SEATS AVAILABLE</div>
                    <div className="rm-title">Join Seyontech Today!</div>
                    <div className="rm-subtitle">
                        {step === 1 ? "Fill your details to reserve your seat." : "Read instructions before payment."}
                    </div>

                    {/* Steps Indicator */}
                    <div className="rm-steps">
                        <div className={`rm-step ${step === 1 ? "active" : "done"}`}>
                            <div className="rm-step-num">{step > 1 ? "✓" : "1"}</div>
                            <span>Your Details</span>
                        </div>
                        <div className={`rm-step-line ${step === 2 ? "done" : ""}`}></div>
                        <div className={`rm-step ${step === 2 ? "active" : "inactive"}`}>
                            <div className="rm-step-num">2</div>
                            <span>Pay ₹500</span>
                        </div>
                    </div>

                    {/* ── STEP 1: Form ── */}
                    {step === 1 && (
                        <>
                            <div className="rm-field">
                                <label className="rm-label">Full Name *</label>
                                <input
                                    className={`rm-input ${errors.name ? "err" : ""}`}
                                    placeholder="Enter your full name"
                                    value={form.name}
                                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                                />
                                {errors.name && <div className="rm-error">{errors.name}</div>}
                            </div>

                            <div className="rm-field">
                                <label className="rm-label">Email Address *</label>
                                <input
                                    className={`rm-input ${errors.email ? "err" : ""}`}
                                    placeholder="Enter your email"
                                    type="email"
                                    value={form.email}
                                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                                />
                                {errors.email && <div className="rm-error">{errors.email}</div>}
                            </div>

                            <div className="rm-field">
                                <label className="rm-label">Phone Number *</label>
                                <input
                                    className={`rm-input ${errors.phone ? "err" : ""}`}
                                    placeholder="Enter 10-digit phone number"
                                    type="tel"
                                    maxLength={10}
                                    value={form.phone}
                                    onChange={(e) => setForm({ ...form, phone: e.target.value.replace(/\D/, "") })}
                                />
                                {errors.phone && <div className="rm-error">{errors.phone}</div>}
                            </div>

                            <div className="rm-field">
                                <label className="rm-label">Select Course *</label>
                                <select
                                    className={`rm-select ${errors.course ? "err" : ""}`}
                                    value={form.course}
                                    onChange={(e) => setForm({ ...form, course: e.target.value })}
                                >
                                    <option value="">-- Choose a course --</option>
                                    {courses.map((c) => <option key={c} value={c}>{c}</option>)}
                                </select>
                                {errors.course && <div className="rm-error">{errors.course}</div>}
                            </div>

                            <button className="rm-btn" onClick={handleNext}>
                                Next — View Instructions →
                            </button>
                        </>
                    )}

                    {/* ── STEP 2: Instructions + Pay ── */}
                    {step === 2 && (
                        <>
                            <button className="rm-back" onClick={() => setStep(1)}>← Back</button>

                            <ul className="rm-list">
                                <li>
                                    <span className="rm-check">✓</span>
                                    <span>This is a one-time <strong>admission fee</strong> to reserve your seat in the program.</span>
                                </li>
                                <li>
                                    <span className="rm-check">✓</span>
                                    <span>After payment, our team will <strong>contact you within 24 hours</strong> to confirm your enrollment.</span>
                                </li>
                                <li>
                                    <span className="rm-check">✓</span>
                                    <span>The admission fee is <strong>non-refundable</strong> once the seat is confirmed.</span>
                                </li>
                                <li>
                                    <span className="rm-check">✓</span>
                                    <span>Remaining course fee must be paid <strong>before the program starts</strong>.</span>
                                </li>
                                <li>
                                    <span className="rm-check">✓</span>
                                    <span>Payment is <strong>100% secure</strong> via Razorpay — UPI, Card & Netbanking accepted.</span>
                                </li>
                            </ul>

                            <div className="rm-fee-box">
                                <div>
                                    <div className="rm-fee-label">Admission Fees</div>
                                    <div className="rm-fee-note">One-time · Non-refundable</div>
                                </div>
                                <div className="rm-fee-amount">₹500</div>
                            </div>

                            <button className="rm-btn" onClick={handlePayment} disabled={loading}>
                                {loading ? "Opening Payment..." : "Pay ₹500 → Confirm Seat"}
                            </button>

                            <div className="rm-secure">🔒 Secured by Razorpay</div>
                        </>
                    )}

                </div>
            </div>
        </>
    )
}

export default RegisterModal