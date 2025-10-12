# Blossom - Modern Food Delivery Frontend 🍔

A responsive and feature-rich frontend for a food delivery web application built with React, Vite, and Tailwind CSS. This project showcases a clean user interface, intuitive state management with the Context API, and a seamless user experience from browsing the menu to placing an order.

## Features

- **Dynamic Menu Filtering:** Users can browse all meals or filter them by specific categories like Salads, Rolls, Desserts, and more.
- **Interactive Shopping Cart:** A fully functional cart system allowing users to add, remove, and view items with real-time updates to the subtotal, delivery fee, and grand total.
- **Responsive Design:** The UI is beautifully crafted with Tailwind CSS to be fully responsive across desktops, tablets, and mobile devices.
- **Multi-Step Checkout Process:** A user-friendly, multi-step form for collecting personal and delivery address information to complete an order.
- **Global State Management:** Utilizes React's Context API (`StoreContext`) to manage application-wide state for the shopping cart and menu data, ensuring a single source of truth.
- **Modern UI Components:** Includes a reusable modal for login/signup (`AccountAccess`) and cleanly structured components for a scalable and maintainable codebase.

## Technologies Used

| Technology       | Description                                              |
| ---------------- | -------------------------------------------------------- |
| **React**        | A JavaScript library for building user interfaces.       |
| **Vite**         | A next-generation frontend tooling for fast development. |
| **Tailwind CSS** | A utility-first CSS framework for rapid UI development.  |
| **React Router** | A standard library for routing in React applications.    |

## Installation

To get a local copy up and running, follow these simple steps.

➡️ **1. Clone the Repository**

```bash
git clone https://github.com/FavourDarasimi/Food-Delivery-Website-Frontend.git
```

➡️ **2. Navigate to the Project Directory**

```bash
cd Food-Delivery-Website-Frontend/Frontend
```

➡️ **3. Install NPM packages**

```bash
npm install
```

➡️ **4. Run the Development Server**

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

## Usage

Once the application is running, you can explore its features:

1.  **Homepage**: You are greeted with a stunning header and a list of "Top Meals For You."
2.  **Menu Page**: Navigate to the Menu to see all available food items. You can click on the category icons (e.g., "Salad," "Rolls") at the top to filter the displayed meals.
3.  **Add to Cart**: On any meal item, click the "add" icon to place it in your shopping cart. The cart icon in the navbar will update with the number of unique items.
4.  **Cart Page**: Click the cart icon in the navbar to view your selected items. Here you can adjust quantities or remove items. The total cost is calculated automatically.
5.  **Checkout**: From the cart, click "Check Out" to proceed to the order page. Fill in your personal and address details in the multi-step form and click "Place Order" to finalize.

## License

This project does not have a license. You are free to use the code as you wish.
