// src/authService.js
import { UserManager } from 'oidc-client';

//Steve's local test environment

const config = {
  authority: "https://sidc01.si.local/adfs",
  client_id: "9366768c-2951-4a7b-8c59-149a32a3fe0b",
  redirect_uri: "https://adfstest.si.local/loginresponse",
  response_type: "code",
  scope: "openid profile",
  post_logout_redirect_uri: "https://adfstest.si.local"
};

// SMC Test Environment

// const config = {
//   authority: "https://adfs.smcduct.com/adfs",
//   client_id: "9366768c-2951-4a7b-8c59-149a32a3fe0b",
//   redirect_uri: "https://dashboard.smcduct.com/loginresponse",
//   response_type: "code",
//   scope: "openid profile",
//   post_logout_redirect_uri: "https://adfstest.smcduct.com"
// };

// DMC Dashboard

//const config = {
//  authority: "https://adfs.smcduct.com/adfs",
//  client_id: "f0432f4e-151c-4152-a622-a453d0fd94df",
//  redirect_uri: "https://dashboard.smcduct.com/loginresponse",
//  response_type: "code",
//  scope: "openid profile",
//  post_logout_redirect_uri: "https://dashboard.smcduct.com/",
//};


const userManager = new UserManager(config);

export default userManager;
