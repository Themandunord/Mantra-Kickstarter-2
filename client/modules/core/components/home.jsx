import React from "react";
import i18n from 'meteor/universe:i18n';
import DatePicker from "antd/lib/date-picker";
import Card, {Meta} from 'antd/lib/card';
import Avatar from 'antd/lib/avatar';
import Col from 'antd/lib/col';
import Row from 'antd/lib/row';
import faker from 'faker';

const generateCards = (self, {
    count = 12,
    xs = 24,
    sm = 24,
    md = 24,
    lg = 24,
    xl = 24
}) => {
    let cards = [];
    for (let i = 0; i < count; i++) {
        const image = faker.image.avatar();
        cards.push(
            <Col key={_.uniqueId("col_card_" + i)} xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
                <Card key={_.uniqueId("card_" + i)} style={{marginTop: 8}} loading={self.state.loading}>
                    <Meta
                        avatar={<Avatar src={image}/>}
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
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };
        setTimeout(() => this.setState({loading: false}), 2000);
    }

    render() {
        return (
            <Row gutter={16}>
                <Col xs={24} sm={12} md={18} lg={18} xl={18}>
                    <p>{i18n.__('title')}</p>
                    {generateCards(this, {
                        count : 18,
                        xs:24,
                        sm:16,
                        md:12,
                        lg:8,
                        xl:8
                    })}
                </Col>
                <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                    <p>{i18n.__('title')}</p>
                    {generateCards(this, {
                        count: 3
                    })}
                </Col>
                <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                    <p>{i18n.__('title')}</p>
                    {generateCards(this, {
                        count: 3
                    })}
                </Col>
            </Row>
        );
    }
}
