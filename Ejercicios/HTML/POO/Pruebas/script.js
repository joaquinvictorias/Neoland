const getUsers = async () => {
    try {
        let res = await fetch(`https://dummyjson.com/users`);
        let data = await res.json();

        const cardContainer = document.getElementById("card-container");

        cardContainer.innerHTML = "";

        data.users.forEach((user) => {
            const { id, image, firstName, lastName, gender, age, email, phone } = user;

            let isContacted = false;

            const userCard = document.createElement("div");
            userCard.classList.add("user-card");

            userCard.innerHTML = `
                <img src="${image}" alt="${firstName}">
                <div class="card-info">
                    <h2>${firstName} ${lastName}</h2>
                    <p><strong>Gender:</strong> ${gender}</p>
                    <p><strong>Age:</strong> ${age}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Phone:</strong> ${phone}</p>
                    <div class="button-container">
                        <button id="contact-button-${id}">
                            ${isContacted ? "Contactado" : "Contactar"}
                        </button>
                    </div>
                </div>
            `;

            cardContainer.appendChild(userCard);

            const contactButton = document.getElementById(`contact-button-${id}`);

            contactButton.onclick = () => {
                isContacted = !isContacted;
                contactButton.textContent = isContacted ? "Contactado" : "Contactar";
            }
        });
    } catch (error) {
        console.error(error);
    }
}

getUsers();