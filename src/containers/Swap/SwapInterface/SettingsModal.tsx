import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { BsFillCheckCircleFill } from "react-icons/bs";
import { FiChevronDown } from "react-icons/fi";
import { MdRadioButtonUnchecked } from "react-icons/md";
import { Modal } from '@mui/material';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
/* eslint-disable jsx-a11y/alt-text */
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    modalStyle: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        margin: '0px 0px 2rem',
        backgroundColor: '#25272A',
        border: '1px solid rgb(33, 36, 41)',
        boxShadow: 'rgb(0 0 0 / 5%) 0px 4px 8px 0px',
        padding: '0px',
        width: '35vw',
        overflow: 'auto',
        alignSelf: 'center',
        // maxWidth: '420px',
        maxHeight: '70vh',
        minHeight: '40vh',
        display: 'flex',
        borderRadius: '20px',
        msOverflowStyle: 'none',
        flexDirection: 'column',

    },
    act1: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        boxSizing: 'border-box'
    },
    act2: {
        display: 'flex',
        alignItems: 'center',
        marginRight: '12px',
    },
    gasText: {
        color: 'silver',
        fontSize: '1rem',
        fontWeight: 'bolder'
    },
    act2Text: {
        color: '#6c86ad',
        textAlign: 'end',
        textTransform: 'capitalize',
    },
    tabLable: {
        color: 'silver',
        fontSize: '0.95rem',
    },
    accord: {
        padding: '2px 16px 2px',
    },
    tabPanel: {
        display: 'block',
        borderRadius: '12px',
        background: '#06070a'
    },
    tp1: {
        flexDirection: 'column',
        width: '100%',
        borderRadius: '4px',
        position: 'relative',
        display: 'inline-flex',
        overflow: 'hiiden',
        whiteSpace: 'nowrap',
        justifyContent: 'space-between',

    },
    tp2: {
        position: 'relative',
        whiteSpace: 'nowrap',
        justifyContent: 'space-between',
        display: 'flex',
        padding: '20px 15px 20px 15px',
        alignItems: 'center',
        cursor: 'pointer',
        borderRadius: '4px',
        borderBottom: '1px solid rgba(255, 255, 255, 0.09)'
    },
    tp2T1: {
        color: 'silver',
        fontSize: '.93rem',
        fontWeight: 'bolder',
        marginLeft: 10
    },
    tp2T2: {
        color: 'silver',
        fontSize: '.7rem',
        fontWeight: 'normal',
        marginLeft: '5px'
    },
    accordinaMain: {
        backgroundColor: 'transparent !important',
        backgroundImage: 'null !important'
    },
    secTab1: {
        display: 'grid',
        gridTemplateColumns: '1fr 100px',
        margin: '16px -10px 0',
    },
    secTab2: {
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        height: '56px',
        lineHeight: '36px',
        fontSize: '12px',
        display: 'grid',
        padding: '4px',
        borderRadius: '12px 0 0 12px',
        background: 'var(--1inch-bg-05)',
        position: 'relative',
        flexDirection: 'row',
        whiteSpace: 'nowrap',
        overflow: 'hidden'
    },
    secTab3: {
        fontSize: '16px',
        height: '100%',
        borderRadius: '8px',
        display: 'flex',
        color: 'silver',
        whiteSpace: 'nowrap',
        position: 'relative',
    },
    secTab4: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        border: '0px',
        background: 'transparent',
        padding: '0px',
        margin: '0px',
        width: '100%',
        color: 'white',
        font: 'inherit',
        outline: 'none',
        position: 'relative',
        borderRadius: '5px',
        marginLeft: '10px',
        fontWeight: 'bold'
    },
    secTab5: {
        userSelect: 'none',
        display: 'inline-block',
        position: 'relative',
        padding: '0px !important',
        lineHeight: '18px'
    },
    secTab6: {
        borderRadius: '0 12px 12px 0',
        minWidth: '50px',
        background: '#06070a',
        padding: '4px 4px 4px 0',
    },
    input: {
        borderRadius: '8px',
        padding: '11px 4px',
        border: 'none',
        lineHeight: '26px',
        width: '100%',
        fontSize: '16px',
        textAlign: 'center',
        color: '#fbfbfb',
        background: 'transparent',
        // box-shadow: var(--1inch-shadow-03),
    },
    main3: {
        padding: '20px 18px 20px 15px',
        marginTop: '10px'
    }
}));

const ModalContainer = (props: any) => {
    const classes = useStyles();
    const handleClose = () => props.handleClose(false);

    return (
        <>
            <Modal
                open={props.openModal}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box id="modalStyle" className={classes.modalStyle}>
                    <Accordion style={{ backgroundColor: 'rgb(25, 27, 31)', paddingTop: 10, paddingBottom: 10 }}>
                        <AccordionSummary
                            expandIcon={<FiChevronDown size={24} style={{ marginTop: 2, color: 'silver', marginLeft: 4 }} />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <div className={classes.act1}>
                                <div className={classes.act2}>
                                    {/* <></> */}
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <img src="https://app.1inch.io/assets/images/icons/gas_price.svg" width="24" height="24" style={{ marginRight: 12 }} />
                                    </div>
                                    <div>
                                        <span className={classes.gasText}>Gas Price</span>
                                    </div>
                                </div>
                                <span className={classes.act2Text}>
                                    High (69.79 Gwei)
                                </span>
                            </div>
                        </AccordionSummary>
                        <AccordionDetails className={classes.accord}>
                            <span style={{ marginTop: '0px' }}>
                                <Box sx={{ bgcolor: 'background.paper', width: '33vw', borderRadius: 10, boxShadow: 0 }}>
                                    <AppBar elevation={0} position="static" style={{ borderRadius: 10 }}>
                                        <Tabs
                                            TabIndicatorProps={{ style: { backgroundColor: "#6c86ad", borderRadius: '10px' } }}
                                            value={0}
                                            //   onChange={handleChange}
                                            indicatorColor="secondary"
                                            textColor="inherit"
                                            variant="fullWidth"
                                            aria-label="full width tabs example"
                                        >
                                            <Tab className={classes.tabLable} label="Basic" />
                                            <Tab className={classes.tabLable} label="Advanced" />
                                        </Tabs>
                                    </AppBar>
                                    <>
                                        {
                                            true ?
                                                <>
                                                    <div className={classes.tabPanel}>
                                                        <div className={classes.tp1}>
                                                            {
                                                                ['High', 'Medium', 'Low'].map(val => {
                                                                    return (
                                                                        <div className={classes.tp2}>
                                                                            <div>
                                                                                {val === 'High' ?
                                                                                    <BsFillCheckCircleFill size={13} color={'#6c86ad'} /> :
                                                                                    <MdRadioButtonUnchecked size={13} color={'silver'} />}
                                                                                {/* <div> */}
                                                                                <span className={classes.tp2T1}> {val}</span>
                                                                                <span className={classes.tp2T2}>~12 sec</span>
                                                                                {/* </div> */}
                                                                            </div>
                                                                            <span className={classes.tp2T1}>51.90 - 57.27 Gwei</span>
                                                                        </div>

                                                                    )
                                                                })
                                                            }
                                                        </div>
                                                    </div>
                                                </> : <></>
                                        }
                                    </>
                                </Box>
                            </span>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion style={{ backgroundColor: 'rgb(25, 27, 31)', paddingTop: 10, paddingBottom: 10 }}>
                        <AccordionSummary
                            expandIcon={<FiChevronDown size={24} style={{ marginTop: 2, color: 'silver', marginLeft: 4 }} />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <div className={classes.act1}>
                                <div className={classes.act2}>
                                    {/* <></> */}
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        {/* <AiOutlineMenu size={24} style={{ marginRight: 12, color: 'silver' }} /> */}
                                        <img src="https://app.1inch.io/assets/images/icons/slippage.svg" width="24" height="24" style={{ marginRight: 12 }} />
                                    </div>
                                    <div>
                                        <span className={classes.gasText}>Slippage Tolerance</span>
                                    </div>
                                </div>
                                <span className={classes.act2Text}>
                                    1%
                                </span>
                            </div>
                        </AccordionSummary>
                        <AccordionDetails className={classes.accord}>
                            <span style={{ marginTop: 0 }}>
                                <Box sx={{ bgcolor: 'background.paper', width: '32vw', borderRadius: 3 }}>
                                    <>
                                        <div className={classes.secTab1}>
                                            <div className={classes.secTab2}>
                                                {
                                                    [0.1, 0.3, 1, 3].map((val) => {
                                                        return (
                                                            <div key={val} className={classes.secTab3}>
                                                                <button type={'button'} className={classes.secTab4}>
                                                                    <span className={classes.secTab5}>
                                                                        <span style={{ verticalAlign: 'middle' }}>
                                                                            {val}%
                                                                        </span>
                                                                    </span>
                                                                </button>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                            <div className={classes.secTab6}>
                                                <input
                                                    placeholder={'Custom'}
                                                    className={classes.input}
                                                />
                                            </div>
                                        </div>
                                    </>
                                </Box>
                            </span>
                        </AccordionDetails>
                    </Accordion>
                    <div className={classes.main3}>
                        <div className={classes.act1}>
                            <div className={classes.act2}>
                                {/* <></> */}
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <img src="https://app.1inch.io/assets/images/icons/liquidity_sources.svg" width="24" height="24" style={{ marginRight: 12 }} />
                                </div>
                                <div>
                                    <span className={classes.gasText}>Liquidity Sources</span>
                                </div>
                            </div>
                            <span className={classes.act2Text}>
                                67
                            </span>
                        </div>
                    </div>
                </Box>
            </Modal>
        </>
    );
};
export default ModalContainer;