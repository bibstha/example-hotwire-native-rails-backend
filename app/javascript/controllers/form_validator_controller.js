import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="form-validator"
export default class extends Controller {
  // target is a form

  connect() {
    this.element.addEventListener("submit", this.validateForm.bind(this))
  }

  // Called when the form is submitted
  validateForm(event) {
    event.preventDefault()
    event.stopPropagation()
    event.target.submit()
  }
}
