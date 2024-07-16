# A website for a local photographer

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Used Frameworks:

- React
- Email.JS
- SweetAlerts
- LazyLoading
- ChakraUI
- FontAwesomeIcon
- Formik
- Yup

ALL COMPONENTS USE ChakraUI

### `navbar.js`
Navigationbar with buttons to navigate the website on the left and linked logos to the social media profiles on the right. Navbar is always visible to ensure comfort for navigation on the site.

### `aboutme.js`
Avatar on top with a description of the photographer.

### `portoflio.js`
Portfolio with pictures, sorted by format with LazyLoadImage and Blur with 1.5s delay. No Backend, so the pictures are saved locally to the site.

### `contact.js`
Contact form with useFormik and yup for client side validation of the inputs. E-mail with the form is sent by EmailJS. Notification popup on submit made with SweetAlert.

### `footer.js`
Footer with contact information like phone number and e-mailadress on left side and navigation buttons on the right side

## Design
- navbar: Design uses #EAE7DC as background color and black as fontcolor. OnHover changes the background of the buttons to #e85a4f and fontcolor to #eae7dc.
- aboutme, portfolio, contact: Design uses #EAE7DC as background color and black as fontcolor. Headers are displayed in #e85a4f.
- footer: Design uses #e85a4f as background color with #EAE7DC as the fontcolor.
- All: Font for headers is `Abril Fatface, serif` and for body `Prata, serif`.
