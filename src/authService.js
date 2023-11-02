// src/authService.js
import { UserManager } from 'oidc-client';

const config = {
  authority: "https://sidc01.si.local/adfs",
  client_id: "9366768c-2951-4a7b-8c59-149a32a3fe0b",
  redirect_uri: "https://adfstest.si.local/loginresponse",
  response_type: "code",
  scope: "openid profile",
  post_logout_redirect_uri: "https://adfstest.si.local",
  silent_redirect_uri: "https://adfstest.si.local/silentrenew.htm"
};

const userManager = new UserManager(config);

export default userManager;
