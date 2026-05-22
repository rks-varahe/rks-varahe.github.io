// identity-validate fires BEFORE the user is created - the canonical place to
// reject signups (including via Google / other external providers). Returning
// status >= 400 cancels the signup.
//
// Keep this in sync with identity-signup.js.
const ALLOWED_DOMAINS = ["varaheanalytics.com", "nexgrowdigital.com", "goodtakestudio.com"];

exports.handler = async (event) => {
  let payload;
  try {
    payload = JSON.parse(event.body || "{}");
  } catch (e) {
    return reject("Invalid signup payload.");
  }

  const email = ((payload.user && payload.user.email) || "").toLowerCase().trim();
  if (!email) return reject("No email on signup.");

  const domain = email.split("@")[1];
  if (!ALLOWED_DOMAINS.includes(domain)) {
    return reject(
      `Sign-up restricted to ${ALLOWED_DOMAINS.map(d => "@" + d).join(", ")} addresses. The address ${email} was rejected.`
    );
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ app_metadata: { roles: ["staff"] } })
  };
};

// Netlify Identity widget reads `error_description` / `msg` / `error` keys from
// the JSON body. Set all three so any widget version shows the message.
function reject(msg) {
  return {
    statusCode: 403,
    body: JSON.stringify({ msg, error: msg, error_description: msg })
  };
}
