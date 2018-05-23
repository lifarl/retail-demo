import * as React from "react";
import { ProductList } from "./components/ProductList"
import './App.scss';

export class App extends React.Component {

    render(): React.ReactNode
    {
        const header = (
                <header>
                <h3>Retail-Demo</h3>
                </header>
        );

        const products = (
            <ProductList/>
        )

        const footer = (
                <footer>
                Footer
                </footer>
        );

        return(
            <div className="grid">
                {header}
                <section className="app-content">
                    {products}
                </section>
                {footer}
            </div>
           
        );
    }

}