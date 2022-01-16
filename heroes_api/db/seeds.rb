response = RestClient.get("https://randomuser.me/api/?results=100")

user_array = JSON.parse(response.body)
user_array["results"].each do |user|
    User.create(first_name: user["name"]["first"], last_name: user["name"]["last"], email: user["email"])
end

# Badge.create(name: "agility", user_id: 1, recipient_email: "walter.mckinney@example.com", recipient_first_name: "Walter", recipient_last_name: "Mckinney", badge_template_id: "a9cec643-f3b2-4063-a08d-768b70e0ddf5", issued_at: "01/15/2022")
# Badge.create(name: "strength", user_id: 1, recipient_email: "walter.mckinney@example.com", recipient_first_name: "Walter", recipient_last_name: "Mckinney", badge_template_id: "7f375e5b-e91c-44a6-8f5f-c56b2886a6b0", issued_at: "01/15/2022")
