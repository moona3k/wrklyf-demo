import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from '../reducers/root_reducer';

const data = {
    businesses: [
        {
            name: "Moon's Chinese Restaurant",
            email: "moon@gmail.com",
            address: { 
                line1: "875 Post St.",
                line2: "",
                city: "San Francisco",
                state: "CA",
                zip: "94105"
            },
            description: "The best authentic Chinese cuisine in the neighborhood!"
        },
        {
            name: "Kim's Dry Cleaner",
            email: "kim@gmail.com",
            address: { 
                line1: "1200 Clay St.",
                line2: "",
                city: "Los Angeles",
                state: "CA",
                zip: "90215"
            },
            description: "Offering 5-star cleaning service with same-day delivery!"
        }
    ],
    employees: [
        {
            first_name: "Daniel",
            last_name: "Moon",
            email: "employee1@gmail.com",
            is_manager: true,
            business: "Moon's Chinese Restaurant",
            pay_per_hour: "20.00",
            pay_period: 'Weekly',
        },
        {
            first_name: "John",
            last_name: "McLauren",
            email: "employee2@gmail.com",
            is_manager: false,
            business: "Moon's Chinese Restaurant",
            pay_per_hour: "17.50",
            pay_period: 'Weekly',
        },
        {
            first_name: "Stacy",
            last_name: "Striker",
            email: "employee3@gmail.com",
            is_manager: false,
            business: "Moon's Chinese Restaurant",
            pay_per_hour: "17.50",
            pay_period: 'Weekly',
        },
        {
            first_name: "Harold",
            last_name: "Rocha",
            email: "employee4@gmail.com",
            is_manager: false,
            business: "Kim's Dry Cleaner",
            pay_per_hour: "20.50",
            pay_period: 'Bi-Weekly',
        }
    ],
    schedules: [
        {
            store_name: "Moon's Chinese Restaurant",
            employee: "Daniel Moon",
            start_date: new Date(),
            end_date: new Date(),
            start_time: new Date(),
            end_time: new Date(),
            role_description: "Serve customers & other hall duties"
        },
        {
            store_name: "Moon's Chinese Restaurant",
            employee: "John McLauren",
            start_date: new Date(),
            end_date: new Date(),
            start_time: new Date(),
            end_time: new Date(),
            role_description: "Dish-washing & general cleaning duties"
        },
        {
            store_name: "Kim's Dry Cleaner",
            employee: "Harold Rocha",
            start_date: new Date(),
            end_date: new Date(),
            start_time: new Date(),
            end_time: new Date(),
            role_description: "Fold clothing & deliver back to customer"
        }
    ]
}

const configureStore = (preloadedState = data) => {
    return createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(logger)
    );
}

export default configureStore;