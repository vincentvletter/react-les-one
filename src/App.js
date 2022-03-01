import React from 'react';
import './App.css';

import Button from "./components/Button";
import Product from "./components/Product";
import Tile from "./components/Tile";

import bag1 from "./assets/bag_1.png";
import bag2 from "./assets/bag_2.png";
import bag3 from "./assets/bag_3.png";
import bag4 from "./assets/bag_4.png";
import brand from "./assets/brand.png";
import story from "./assets/our_story.png";


function App() {
    return (
        <div>
            <h1>Handbags & Purses</h1>
            <nav>
                <Button
                    title="to the collection"
                    disableButton={false}
                />
                <Button
                    title="shop all bags"
                    disableButton={false}
                />
                <Button
                    title="pre-orders"
                    disableButton={true}
                />
            </nav>
            <main>
                <Product
                    span="Best seller"
                    image={bag1}
                    titleBag="The handy bag"
                    price="€ 400,-"
                />
                <Product
                    span="Best seller"
                    image={bag2}
                    titleBag="The stylish bag"
                    price="€ 250,-"
                />
                <Product
                    span="New collection"
                    image={bag3}
                    titleBag="The simple bag"
                    price="€ 300,-"
                />
                <Product
                    span="New collection"
                    image={bag4}
                    titleBag="The trendy bag"
                    price="€ 400,-"
                />
            </main>
            <footer>
                <Tile>
                    <h2>The brand</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam inventore maxime necessitatibus
                        similique tenetur, voluptatem.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, delectus eaque harum iusto labore
                        saepe.</p>
                </Tile>
                <Tile>
                    <img src={brand} alt=""/>
                </Tile>
                <Tile>
                    <img src={story} alt=""/>
                </Tile>
                <Tile>
                    <h2>our story</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis cum cumque delectus
                        deleniti
                        dicta, dolores eligendi, eum iure nobis officiis quaerat rem tempore.
                        Aspernatur distinctio ipsum nam, necessitatibus omnis quod repellat sed? Asperiores assumenda
                        cupiditate et quod velit! Consectetur consequuntur distinctio eaque iusto,
                        molestiae repellat similique ut voluptatum? Adipisci, iste?
                    </p>
                </Tile>
            </footer>
        </div>
    );
}

export default App;



