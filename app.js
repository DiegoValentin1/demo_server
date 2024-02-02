const db = require('./db/connection');
const axios = require('axios');

const pets = [
    { name: 'Max', type: 'Dog', breed: 'Golden Retriever', owner_id: 1 },
    { name: 'Bella', type: 'Cat', breed: 'Siamese', owner_id: 2 },
    { name: 'Charlie', type: 'Dog', breed: 'Labrador', owner_id: 3 },
    { name: 'Lucy', type: 'Bird', breed: 'Parrot', owner_id: 4 },
    { name: 'Milo', type: 'Cat', breed: 'Maine Coon', owner_id: 5 },
    { name: 'Luna', type: 'Dog', breed: 'Poodle', owner_id: 6 },
    { name: 'Oliver', type: 'Cat', breed: 'Bengal', owner_id: 7 },
    { name: 'Chloe', type: 'Hamster', breed: 'Syrian', owner_id: 8 },
    { name: 'Leo', type: 'Dog', breed: 'Dachshund', owner_id: 9 },
    { name: 'Zoe', type: 'Fish', breed: 'Goldfish', owner_id: 10 },
    { name: 'Oscar', type: 'Cat', breed: 'Ragdoll', owner_id: 11 },
    { name: 'Mia', type: 'Dog', breed: 'Beagle', owner_id: 12 },
    { name: 'Simba', type: 'Cat', breed: 'Siberian', owner_id: 13 },
    { name: 'Coco', type: 'Rabbit', breed: 'Holland Lop', owner_id: 14 },
    { name: 'Tiger', type: 'Dog', breed: 'Boxer', owner_id: 15 },
    { name: 'Lily', type: 'Cat', breed: 'Scottish Fold', owner_id: 16 },
    { name: 'Mochi', type: 'Guinea Pig', breed: 'Abyssinian', owner_id: 17 },
    { name: 'Teddy', type: 'Dog', breed: 'Shih Tzu', owner_id: 18 },
    { name: 'Nala', type: 'Cat', breed: 'Persian', owner_id: 19 },
    { name: 'Rocky', type: 'Ferret', breed: 'Sable', owner_id: 20 },
    { name: 'Sasha', type: 'Dog', breed: 'Husky', owner_id: 21 },
    { name: 'Cleo', type: 'Snake', breed: 'Ball Python', owner_id: 22 },
    { name: 'Dexter', type: 'Cat', breed: 'British Shorthair', owner_id: 23 },
    { name: 'Riley', type: 'Dog', breed: 'Chihuahua', owner_id: 24 },
    { name: 'Misty', type: 'Turtle', breed: 'Red-eared Slider', owner_id: 25 },
    { name: 'Maximus', type: 'Cat', breed: 'Egyptian Mau', owner_id: 26 },
    { name: 'Ruby', type: 'Dog', breed: 'Pomeranian', owner_id: 27 },
    { name: 'Jasper', type: 'Hedgehog', breed: 'African Pygmy', owner_id: 28 },
    { name: 'Lola', type: 'Cat', breed: 'Manx', owner_id: 29 },
    { name: 'Bailey', type: 'Dog', breed: 'Cavalier King Charles', owner_id: 30 },
    { name: 'Whiskers', type: 'Rat', breed: 'Fancy Rat', owner_id: 31 },
    { name: 'Zeus', type: 'Cat', breed: 'Norwegian Forest', owner_id: 32 },
    { name: 'Rosie', type: 'Dog', breed: 'Bulldog', owner_id: 33 },
    { name: 'Olive', type: 'Ferret', breed: 'Albino', owner_id: 34 },
    { name: 'Gizmo', type: 'Cat', breed: 'Siamese', owner_id: 35 },
    { name: 'Winston', type: 'Dog', breed: 'Shiba Inu', owner_id: 36 },
    { name: 'Snickers', type: 'Guinea Pig', breed: 'Peruvian', owner_id: 37 },
    { name: 'Sophie', type: 'Cat', breed: 'Ragamuffin', owner_id: 38 },
    { name: 'Copper', type: 'Dog', breed: 'Australian Shepherd', owner_id: 39 },
    { name: 'Penny', type: 'Fish', breed: 'Betta', owner_id: 40 },
    { name: 'Jax', type: 'Cat', breed: 'Oriental', owner_id: 41 },
    { name: 'Koda', type: 'Dog', breed: 'Akita', owner_id: 42 },
    { name: 'Pepper', type: 'Rabbit', breed: 'Mini Rex', owner_id: 43 },
    { name: 'Harley', type: 'Cat', breed: 'American Shorthair', owner_id: 44 },
    { name: 'Maddie', type: 'Dog', breed: 'Corgi', owner_id: 45 },
    { name: 'Smokey', type: 'Hamster', breed: 'Roborovski', owner_id: 46 },
    { name: 'Apollo', type: 'Cat', breed: 'Sphynx', owner_id: 47 },
    { name: 'Roscoe', type: 'Dog', breed: 'Pug', owner_id: 48 },
    { name: 'Athena', type: 'Snake', breed: 'Corn Snake', owner_id: 49 },
    { name: 'Nacho', type: 'Cat', breed: 'Tabby', owner_id: 50 }
];

const createClient = () => {
    const {name, type, breed} = pets[Math.floor(Math.random() * pets.length)];
    const cliente = Math.floor(Math.random() * 10);
    const sql = `INSERT INTO pets (name,type, breed, owner_id, created_at) 
            VALUES ('${name}','${type}','${breed}',${cliente}, '2024-02-01 19:07:41')`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log('Mascota creada!');
    });
}

setInterval(createClient, 5000);