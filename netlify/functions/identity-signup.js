// identity-signup fires AFTER the user is created. We use it as a belt-and-suspenders
// gate in case identity-validate doesn't intercept (some external-provider edge cases).
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
      `Sign-up restricted to ${ALLOWED_DOMAINS.map(d => "@" + d).join(", ")} addresses.`
    );
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ app_metadata: { roles: ["staff"] } })
  };
};

function reject(msg) {
  return {
    statusCode: 403,
    body: JSON.stringify({ msg, error: msg, error_description: msg })
  };
}
