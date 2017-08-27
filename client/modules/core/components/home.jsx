import React from "react";
import i18n from 'meteor/universe:i18n';
import DatePicker from "antd/lib/date-picker";
const T = i18n.createComponent();

const Home = () => {
    return (
        <div>
            <h1>Mantra</h1>
            <p>
                Welcome to Mantra 0.4.2.
            </p>
            <ul>
                <li>
                    Read <a target="_blank" href="https://kadirahq.github.io/mantra/">spec</a>
                </li>
                <li>
                    Learn <a target="_blank" href="https://github.com/sungwoncho/mantra-cli#commands">CLI</a>
                </li>
            </ul>

            <T>title</T>

            <DatePicker />
        </div>
    );
}

export default Home;
