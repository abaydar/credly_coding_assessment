import React from 'react'


export default function User({ user }) {

    const getDate = () => {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0');
        let yyyy = today.getFullYear();

        return mm + '/' + dd + '/' + yyyy;
    }

    const handleAgilityClick = () => {

        const badge = {
            recipient_email: user.email,
            issued_to_first_name: user.first_name,
            issued_to_last_name: user.last_name,
            badge_template_id: 'a9cec643-f3b2-4063-a08d-768b70e0ddf5',
            issued_at: getDate(),
            user_id: user.id
        }
        
        const auth_token = btoa(process.env.REACT_APP_AUTH_TOKEN)

        const config = {
            mode: 'no-cors',
            method: 'POST',
            body: JSON.stringify(badge),
            headers: 
            {'Accept': 'application/json',
            'Authorization': `Basic ${auth_token}=`,
            'Content-Type': 'application/json'}
        }

        fetch('https://sandbox-api.credly.com/v1/organizations/2cacb20a-c03c-48ad-bf8b-99180dc93b90/badges', config)
        .then(resp => resp.json())
        .then(badge => console.log(badge))

        sendAgilityBadgeToHeroesAPI()

    }

    const handleStrengthClick = () => {
        const badge = {
            recipient_email: user.email,
            issued_to_first_name: user.first_name,
            issued_to_last_name: user.last_name,
            badge_template_id: '7f375e5b-e91c-44a6-8f5f-c56b2886a6b0',
            issued_at: getDate(),
            user_id: user.id
        }
        
        const auth_token = btoa(process.env.REACT_APP_AUTH_TOKEN)

        const config = {
            mode: 'no-cors',
            method: 'POST',
            body: JSON.stringify(badge),
            headers: 
            {'Accept': 'application/json',
            'Authorization': `Basic ${auth_token}=`,
            'Content-Type': 'application/json'}
        }

        fetch('https://sandbox-api.credly.com/v1/organizations/2cacb20a-c03c-48ad-bf8b-99180dc93b90/badges', config)
        .then(resp => resp.json())
        .then(badge => console.log(badge))

        sendStrengthBadgeToHeroesAPI()
    }

    const sendAgilityBadgeToHeroesAPI = () => {
        const badge = {
            recipient_email: user.email,
            issued_to_first_name: user.first_name,
            issued_to_last_name: user.last_name,
            badge_template_id: 'a9cec643-f3b2-4063-a08d-768b70e0ddf5',
            issued_at: getDate(),
            user_id: user.id,
            name: 'agility'
        }

        fetch('http://localhost:3000/badges', {
            method: 'POST',
            body: JSON.stringify(badge),
            headers: { 'Content-Type': 'application/json'}
        })
        .then(resp => resp.json())
        .then(badge => console.log(badge))
    }

    const sendStrengthBadgeToHeroesAPI = () => {
        const badge = {
            recipient_email: user.email,
            issued_to_first_name: user.first_name,
            issued_to_last_name: user.last_name,
            badge_template_id: '7f375e5b-e91c-44a6-8f5f-c56b2886a6b0',
            issued_at: getDate(),
            user_id: user.id,
            name: 'strength'
        }

        fetch('http://localhost:3000/badges', {
            method: 'POST',
            body: JSON.stringify(badge),
            headers: { 'Content-Type': 'application/json'}
        })
        .then(resp => resp.json())
        .then(badge => console.log(badge))
    }

    return (
        <div>
            <li>
                {user.first_name} {user.last_name}
                
            </li>
            {user.badges.length > 0 ? 'Badges earned: ' : ''}
            {user.badges.map(badge => (
                <ul>
                    <li key={badge.id}>{badge.name}</li>
                </ul>
            ))}
            {user.badges.find(badge => badge.name === 'agility') ? '' : <button onClick={handleAgilityClick}>Add Agility Badge</button>}
            {user.badges.find(badge => badge.name === 'strength') ? '' : <button onClick={handleStrengthClick}>Add Strength Badge</button>}
            
        </div>
    )
}
