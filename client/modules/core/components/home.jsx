import React from "react";
import i18n from 'meteor/universe:i18n';
import DatePicker from "antd/lib/date-picker";
import Card, {Meta} from 'antd/lib/card';
import Avatar from 'antd/lib/avatar';
import Col from 'antd/lib/col';
import Row from 'antd/lib/row';
import faker from 'faker';

const generateCards = (self) => {
    let cards = [];
    for (let i = 0; i < 12; i++) {
        cards.push(
            <Col key={"col_card_" + i} xs={24} sm={12} md={10} lg={8} xl={4}>
                <Card key={"card_" + i} style={{ marginTop: 8 }} loading={self.state.loading}>
                    <Meta
                        avatar={<Avatar src={faker.image.avatar()} />}
                        title="Card title"
                        description="This is the description"
                    />
                </Card>
            </Col>
        );
    }

    return (
        <Row gutter={16}>
            {cards}
        </Row>
    );
}

export default class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loading: true
        };
        setTimeout(() => this.setState({loading:false}), 2000);
    }

    render() {
        return (
            <div>   
                <p>{i18n.__('title')}</p>
                {generateCards(this)}
            </div>
        );
    } 
}
