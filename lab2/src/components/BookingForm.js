import { useState } from "react"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dateService: "",
    message: "",
  })

  const [showAlert, setShowAlert] = useState(false)
  const [alertMessage, setAlertMessage] = useState("")
  const [alertType, setAlertType] = useState("success")

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Validation
    if (!formData.name || !formData.email || !formData.dateService) {
      setAlertMessage("Please fill in all required fields!")
      setAlertType("danger")
      setShowAlert(true)
      setTimeout(() => setShowAlert(false), 3000)
      return
    }

    console.log("Form submitted:", formData)

    // Show success message
    setAlertMessage("Booking request sent successfully! We'll contact you soon.")
    setAlertType("success")
    setShowAlert(true)

    // Reset form
    setFormData({
      name: "",
      email: "",
      dateService: "",
      message: "",
    })

    // Hide alert after 5 seconds
    setTimeout(() => {
      setShowAlert(false)
    }, 5000)
  }

  return (
    <div className="mx-auto" style={{ maxWidth: "800px" }}>
      {showAlert && (
        <div className={`alert alert-${alertType} mb-3`} role="alert">
          {alertMessage}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col-md-4 mb-3 mb-md-0">
            <input
              type="text"
              className="form-control"
              placeholder="Your Name *"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-4 mb-3 mb-md-0">
            <input
              type="email"
              className="form-control"
              placeholder="Your Email *"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-4">
            <select
              className="form-select"
              name="dateService"
              value={formData.dateService}
              onChange={handleChange}
              required
            >
              <option value="">Select a Service *</option>
              <option value="lunch">Lunch (12:00 - 15:00)</option>
              <option value="dinner">Dinner (18:00 - 22:00)</option>
              <option value="weekend-brunch">Weekend Brunch (10:00 - 14:00)</option>
              <option value="late-night">Late Night (22:00 - 01:00)</option>
            </select>
          </div>
        </div>

        <div className="mb-3">
          <textarea
            className="form-control"
            rows="5"
            placeholder="Please write your requests..."
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>

        <button type="submit" className="btn btn-warning px-4 py-2 fw-bold">
          Send Message
        </button>
      </form>
    </div>
  )
}

export default BookingForm
