
import './content.scss'
import Context from '../../components/Context/Context'
import Feature from '../../components/Feature/Feature'
import Logos from '../../components/Logos/Logos'
import Buttons from '../../components/Buttons/Buttons'
import devicesImage from '../../assets/images/image-devices.png'

const context1 = [
    {
        type: 'small',
        align: 'left',
        title: 'Quick Search',
        content: 'Easily search your snippets by content, category, web address, application, and more.'
    },
    {
        type: 'small',
        align: 'left',
        title: 'iCloud Sync',
        content: 'Instantly saves and syncs snippets across all your devices.',
    },
    {
        type: 'small',
        align: 'left',
        title: 'Complete History',
        content: 'Retrieve any snippets from the first moment you started using the app.',
    }
]

const Content = () => {
    return (
        <div id='content'>
            <Context
                type='normal'
                align='center'
                title='Keep track of your snippets'
                content='Clipboard instantly stores any item you copy in the cloud, meaning you can access your snippets immediately on all your devices. Our Mac and iOS apps will help you organize everything.'
            />

            <div className="content-row">
                <div className="content-col">
                    <div className="content-image__computer"></div>
                </div>

                <div className="content-col">
                    <div className="content-context1">
                    {
                        context1.map((context) => {
                            return (
                                <Context
                                    type={context.type}
                                    align={context.align}
                                    title={context.title}
                                    content={context.content}
                                />
                            )
                        })
                    }
                    </div>
                </div>
            </div>

            <Context
                type='normal'
                align='center'
                title='Access Clipboard anywhere'
                content='Whether you’re on the go, or at your computer, you can access all your Clipboard snippets in a few simple clicks.'
            />

            <div className="content-image__devices">
                <img src={devicesImage} alt="Devices Image" />
            </div>

            <Context
                type='normal'
                align='center'
                title='Supercharge your workflow'
                content='We’ve got the tools to boost your productivity.'
            />

            <Feature/>

            <Logos/>

            <Context
                type='normal'
                align='center'
                title='Clipboard for iOS and Mac OS'
                content="Available for free on the App Store. Download for Mac or iOS, sync with iCloud and you're ready to start adding to your clip board."
            />

            <Buttons/>
        </div>
    );
};

export default Content;
