export const NEGATIVE_LOGIN_DATA = [
    {
        scenario: "Invalid username and valid password",
        username: "invalidUser",
        password: process.env.TMDB_PASSWORD || "defaultPassword"
    },
    {
        scenario: "Valid username and invalid password",
        username: process.env.TMDB_USERNAME || "defaultUser",
        password: "invalidPassword"
    }
]

export const AUTH_DATA = {
    "username" : process.env.TMDB_USERNAME || "defaultUser",
    "password" : process.env.TMDB_PASSWORD || "defaultPassword"
}


