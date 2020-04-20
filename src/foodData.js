const foodData = [
    {
        "key": "b1",
        "category": "breakfast",
        "name": "Eggs Benedict",
        "price": 8.99,
        "img": "https://i.postimg.cc/MZN5z6vL/breakfast1.png",
        "description": "Delicious food to start your breakfast",
        "detailsDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget lacinia augue, at vestibulum felis. Ut diam ipsum, varius vel nibh eu, porttitor ornare sem. Donec sit amet finibus purus. Aliquam ut lobortis tortor. Phasellus sit amet dolor lacus."
    },
    {
        "key": "b2",
        "category": "breakfast",
        "name": "Breakfast Sandwich",
        "price": 9.99,
        "img": "https://i.postimg.cc/26v6v77h/breakfast2.png",
        "description": "Delicious food to start your breakfast",
        "detailsDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget lacinia augue, at vestibulum felis. Ut diam ipsum, varius vel nibh eu, porttitor ornare sem. Donec sit amet finibus purus. Aliquam ut lobortis tortor. Phasellus sit amet dolor lacus."
    },
    {
        "key": "b3",
        "category": "breakfast",
        "name": "Baked Chicken",
        "price": 10.99,
        "img": "https://i.postimg.cc/GtdcDw2n/breakfast3.png",
        "description": "Delicious food to start your breakfast",
        "detailsDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget lacinia augue, at vestibulum felis. Ut diam ipsum, varius vel nibh eu, porttitor ornare sem. Donec sit amet finibus purus. Aliquam ut lobortis tortor. Phasellus sit amet dolor lacus."
    },
    {
        "key": "b4",
        "category": "breakfast",
        "name": "Bagel and Cream Cheese",
        "price": 6.99,
        "img": "https://i.postimg.cc/6pgt0G30/breakfast4.png",
        "description": "Delicious food to start your breakfast",
        "detailsDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget lacinia augue, at vestibulum felis. Ut diam ipsum, varius vel nibh eu, porttitor ornare sem. Donec sit amet finibus purus. Aliquam ut lobortis tortor. Phasellus sit amet dolor lacus."
    },
    {
        "key": "b5",
        "category": "breakfast",
        "name": "Full Breakfast Fried Egg Toast",
        "price": 3.99,
        "img": "https://i.postimg.cc/Wz5PJdC0/breakfast5.png",
        "description": "Delicious food to start your breakfast",
        "detailsDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget lacinia augue, at vestibulum felis. Ut diam ipsum, varius vel nibh eu, porttitor ornare sem. Donec sit amet finibus purus. Aliquam ut lobortis tortor. Phasellus sit amet dolor lacus."
    },
    {
        "key": "b6",
        "category": "breakfast",
        "name": "Toast Croissant Fried Egg",
        "price": 19.99,
        "img": "https://i.postimg.cc/Zq6tx7Xb/breakfast6.png",
        "description": "Delicious food to start your breakfast",
        "detailsDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget lacinia augue, at vestibulum felis. Ut diam ipsum, varius vel nibh eu, porttitor ornare sem. Donec sit amet finibus purus. Aliquam ut lobortis tortor. Phasellus sit amet dolor lacus."
    },
    {
        "key": "l1",
        "category": "lunch",
        "name": "Beef Steak",
        "price": 15.99,
        "img": "https://i.postimg.cc/m2nvfWsZ/lunch1.png",
        "description": "Delicious food for your empty stomach",
        "detailsDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget lacinia augue, at vestibulum felis. Ut diam ipsum, varius vel nibh eu, porttitor ornare sem. Donec sit amet finibus purus. Aliquam ut lobortis tortor. Phasellus sit amet dolor lacus."
    },
    {
        "key": "l2",
        "category": "lunch",
        "name": "Honey Soy Glazed Salmon with Peppers",
        "price": 7.99,
        "img": "https://i.postimg.cc/XvfmCZyX/lunch2.png",
        "description": "Delicious food for your empty stomach",
        "detailsDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget lacinia augue, at vestibulum felis. Ut diam ipsum, varius vel nibh eu, porttitor ornare sem. Donec sit amet finibus purus. Aliquam ut lobortis tortor. Phasellus sit amet dolor lacus."
    },
    {
        "key": "l3",
        "category": "lunch",
        "name": "Tarragon Rubbed Salmon",
        "price": 6.99,
        "img": "https://i.postimg.cc/B6Jycqxp/lunch3.png",
        "description": "Delicious food for your empty stomach",
        "detailsDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget lacinia augue, at vestibulum felis. Ut diam ipsum, varius vel nibh eu, porttitor ornare sem. Donec sit amet finibus purus. Aliquam ut lobortis tortor. Phasellus sit amet dolor lacus."
    },
    {
        "key": "l4",
        "category": "lunch",
        "name": "Indian Lunch",
        "price": 8.99,
        "img": "https://i.postimg.cc/0jQBFcXJ/lunch4.png",
        "description": "Delicious food for your empty stomach",
        "detailsDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget lacinia augue, at vestibulum felis. Ut diam ipsum, varius vel nibh eu, porttitor ornare sem. Donec sit amet finibus purus. Aliquam ut lobortis tortor. Phasellus sit amet dolor lacus."
    },
    {
        "key": "l5",
        "category": "lunch",
        "name": "Fried Chicken Bento",
        "price": 9.99,
        "img": "https://i.postimg.cc/rFDH9ZtB/lunch5.png",
        "description": "Delicious food for your empty stomach",
        "detailsDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget lacinia augue, at vestibulum felis. Ut diam ipsum, varius vel nibh eu, porttitor ornare sem. Donec sit amet finibus purus. Aliquam ut lobortis tortor. Phasellus sit amet dolor lacus."
    },
    {
        "key": "l6",
        "category": "lunch",
        "name": "Healthy Meal Plan",
        "price": 23.99,
        "img": "https://i.postimg.cc/C5QQgk9r/lunch6.png",
        "description": "Delicious food for your empty stomach",
        "detailsDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget lacinia augue, at vestibulum felis. Ut diam ipsum, varius vel nibh eu, porttitor ornare sem. Donec sit amet finibus purus. Aliquam ut lobortis tortor. Phasellus sit amet dolor lacus."
    },
    {
        "key": "d1",
        "category": "dinner",
        "name": "Baked Chicken",
        "price": 9.99,
        "img": "https://i.postimg.cc/QMJYMRRT/dinner1.png",
        "description": "Delicious food for your empty stomach",
        "detailsDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget lacinia augue, at vestibulum felis. Ut diam ipsum, varius vel nibh eu, porttitor ornare sem. Donec sit amet finibus purus. Aliquam ut lobortis tortor. Phasellus sit amet dolor lacus."
    },
    {
        "key": "d2",
        "category": "dinner",
        "name": "Lemon Salmon Piccata",
        "price": 10.99,
        "img": "https://i.postimg.cc/cCrFX66R/dinner2.png",
        "description": "Delicious food for your empty stomach",
        "detailsDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget lacinia augue, at vestibulum felis. Ut diam ipsum, varius vel nibh eu, porttitor ornare sem. Donec sit amet finibus purus. Aliquam ut lobortis tortor. Phasellus sit amet dolor lacus."
    },
    {
        "key": "d3",
        "category": "dinner",
        "name": "Garlic Butter Baked Salmon",
        "price": 6.99,
        "img": "https://i.postimg.cc/KYfQbtM7/dinner3.png",
        "description": "Delicious food for your empty stomach",
        "detailsDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget lacinia augue, at vestibulum felis. Ut diam ipsum, varius vel nibh eu, porttitor ornare sem. Donec sit amet finibus purus. Aliquam ut lobortis tortor. Phasellus sit amet dolor lacus."
    },
    {
        "key": "d4",
        "category": "dinner",
        "name": "French Fries with Cheese",
        "price": 8.99,
        "img": "https://i.postimg.cc/2ys7GwsY/dinner4.png",
        "description": "Delicious food for your empty stomach",
        "detailsDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget lacinia augue, at vestibulum felis. Ut diam ipsum, varius vel nibh eu, porttitor ornare sem. Donec sit amet finibus purus. Aliquam ut lobortis tortor. Phasellus sit amet dolor lacus."
    },
    {
        "key": "d5",
        "category": "dinner",
        "name": "Pork Tenderloin with Quinoa",
        "price": 12.99,
        "img": "https://i.postimg.cc/dQhMWVbN/dinner5.png",
        "description": "Delicious food for your empty stomach",
        "detailsDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget lacinia augue, at vestibulum felis. Ut diam ipsum, varius vel nibh eu, porttitor ornare sem. Donec sit amet finibus purus. Aliquam ut lobortis tortor. Phasellus sit amet dolor lacus."
    },
    {
        "key": "d6",
        "category": "dinner",
        "name": "Salmon with Grapefruit and Lentil Salad",
        "price": 17.99,
        "img": "https://i.postimg.cc/fWpG1hZz/dinner6.png",
        "description": "Delicious food for your empty stomach",
        "detailsDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget lacinia augue, at vestibulum felis. Ut diam ipsum, varius vel nibh eu, porttitor ornare sem. Donec sit amet finibus purus. Aliquam ut lobortis tortor. Phasellus sit amet dolor lacus."
    },
]

export default foodData;