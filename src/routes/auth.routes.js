const router = require('express').Router()
const {
  register,
  login,
  getMe,
  logout,
  updateAddress,
} = require('../controllers/auth.controller')
const { protect } = require('../middleware/auth')
const authController = require('../controllers/auth.controller')

router.post('/register', register)
router.post('/login', login)
router.get('/me', protect, getMe)
router.post('/logout', protect, logout)
router.put('/address', protect, updateAddress)
router.post('/send-code', authController.sendVerificationCode)
router.post('/test-verify-otp', authController.testVerifyOTP)
router.delete('/delete', protect, authController.deleteUser)

// FORGOT PASSWORD ROUTES
router.post('/forgot-password', authController.forgotPassword)
router.post(
  '/verify-forgot-password-code',
  authController.verifyForgotPasswordCode
)
router.post('/reset-password', authController.resetPassword)

module.exports = router
