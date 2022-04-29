import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import Home from "./home";
import { Provider } from 'react-redux';
import { store } from "../../../../redux/store";


test('renders correctly', async () => {
    render(<BrowserRouter><Provider store={store}><Home/></Provider></BrowserRouter>);

    screen.debug()

    
});