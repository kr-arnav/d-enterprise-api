// importing libraries
const express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors')

// other constants
const app = express(),
    port = process.env.PORT || 8082

// middlewares for app configuration
app
    .use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json())
    .use(cors());

// importing routes
const userRouter = require('./routers/user.router');
const userPersonalInformationRouter = require('./routers/user-personal-information.router');
const UserAcademicInformationRouter = require('./routers/user-academic-information.router');
const UserProfessionalInformationRouter = require('./routers/user-professional-information.router');
const UserBankAccountInformationRouter = require('./routers/user-bank-account-information.router');
const UserTermsAgreementRouter = require('./routers/user-terms-agreement.router');

// middlewares for routing
app
    .use('/user', userRouter)
    .use('/user-information/personal-information', userPersonalInformationRouter)
    .use('/user-information/academic-information', UserAcademicInformationRouter)
    .use('/user-information/professional-information', UserProfessionalInformationRouter)
    .use('/user-information/bank-account-information', UserBankAccountInformationRouter)
    .use('/user-information/terms-agreement', UserTermsAgreementRouter)

// initializing app
app.listen(port, err => {
    if(err) {
        console.log(`Express Server error. Failed to run on port ${port}`)
    }
    else {
        console.log(`Express Server is running on port ${port}`)
    }
})