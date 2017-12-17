import React from 'react';
import classNames from 'classnames';

class GlobalFooter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {className, copyright, links} = this.props;

        const clsString = classNames('globalFooter', className);
        return (
            <div className={clsString}>
                {
                    links && (
                        <div className='links'>
                            {links.map(link => (
                                <a
                                    key={link.title}
                                    target={link.blankTarget ? '_blank' : '_self'}
                                    href={link.href}
                                >
                                    {link.title}
                                </a>
                            ))}
                        </div>
                    )
                }
                {copyright && <div className='copyright'>{copyright}</div>}
            </div>
        );
    }
}

export default GlobalFooter;
