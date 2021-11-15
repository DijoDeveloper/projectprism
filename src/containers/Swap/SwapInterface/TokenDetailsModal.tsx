import Box from '@mui/material/Box';
import { MdClose } from "react-icons/md";
import { Modal } from '@mui/material';
/* eslint-disable jsx-a11y/alt-text */
import {VscCircleLargeFilled} from 'react-icons/vsc'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    modalStyle: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        margin: '0px 0px 2rem',
        backgroundColor: 'rgb(25, 27, 31)',
        border: '1px solid rgb(33, 36, 41)',
        boxShadow: 'rgb(0 0 0 / 5%) 0px 4px 8px 0px',
        padding: '0px',
        width: '50vw',
        overflow: 'auto',
        alignSelf: 'center',
        maxWidth: '420px',
        maxHeight: '70vh',
        minHeight: '20vh',
        display: 'flex',
        borderRadius: '20px',
        msOverflowStyle: 'none',
    },
    size: {
        width: '100%',
        flex: '1 1 0%',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    pM1: {
        padding: '16px',
        display: 'grid',
        gridAutoRows: 'auto',
        rowGap: '16px',
    },
    pmRow1: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        padding: '0px',
        alignItems: 'center',
        boxSizing: 'border-box',
        margin: '0px',
        minWidth: '0px',
    },
    token: {
        boxSizing: 'border-box',
        margin: '0px',
        fontWeight: 'normal',
        fontSize: '16px',
        minWidth: '0px',
        color: 'white',
    },
    pM2: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        boxSizing: 'border-box',
        margin: '0px',
        minWidth: '0px',
    },
    input: {
        position: 'relative',
        display: 'flex',
        padding: '12px',
        alignItems: 'center',
        width: '100%',
        whiteSpace: 'nowrap',
        background: 'none',
        outline: 'none',
        borderRadius: '20px',
        color: 'rgb(255, 255, 255)',
        border: '1px solid rgb(64, 68, 79)',
        appearance: 'none',
        fontSize: '18px',
        transition: 'border 100ms ease 0s',
    },
    pM3: {
        display: 'grid',
        gridAutoRows: 'auto',
        rowGap: '12px',
    },
    pM31: {
        flexWrap: 'wrap',
        width: '100%',
        display: 'flex',
        padding: '0px',
        alignItems: 'center',
        justifyContent: 'flex-start',
        boxSizing: 'border-box',
        margin: '0px',
        minWidth: '0px',
    },
    cmbases: {
        boxSizing: 'border-box',
        margin: '0px',
        minWidth: '0px',
        fontSize: '14px',
        paddingRight: '4px',
    },
    pm32: {
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        display: 'flex',
        padding: '0px',
        boxSizing: 'border-box',
        minWidth: '0px',
    },
    currBtn: {
        border: '1px solid rgb(64, 68, 79)',
        borderRadius: '10px',
        display: 'flex',
        padding: '6px 8px 6px 8px',
        alignItems: 'center',
        margin: '4px',
    },
    currBtn1: {
        marginRight: '8px',
        width: '24px',
        height: '24px',
        boxShadow: 'rgb(0 0 0 / 8%) 0px 6px 10px',
        borderRadius: '24px',
    },
    currBtn2: {
        boxSizing: 'border-box',
        margin: "0px",
        minWidth: '0px',
        fontWeight: 'normal',
        fontSize: '16px',
    },
    pM2Dash: {
        height: '1px',
        width: '100%',
        backgroundColor: 'rgb(44, 47, 54)'
    },
    pM3BottomView: {
        flex: '1 1 0%',
        position: 'relative',
    },
    bv1: {
        position: 'relative',
        height: '180px',
        width: '100%',
        overflow: 'auto',
        willChange: 'transform',
        direction: 'ltr',
    },
    bv11: {
        // height: '2576px',
        width: '100%'
    },
    bv111: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    pm3T1: {
        fontFamily: 'bolder',
        color: 'white'
    },
    pm3T2: {
        color: 'rgb(143, 150, 172)',
        fontSize: '12px',
        marginTop: '2px'
    },
    bv12: {
        boxSizing: 'border-box',
        margin: '0px',
        minWidth: '0px',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '4px 20px',
        height: '56px',
        display: 'grid',
        gridTemplateColumns: 'auto minmax(auto, 1fr) auto minmax(0px, 72px)',
        gap: '16px',
        pointerEvents: 'none',
        opacity: '0.5',
        position: 'absolute',
        left: '0px',
        top: '0px',
        width: '100%',
    },
    manageTokenList: {
        width: '100%',
        borderRadius: '0px 0px 20px 20px',
        padding: '20px 0px 20px 0px',
        backgroundColor: 'rgb(33, 36, 41)',
        borderTop: '1px solid rgb(44, 47, 54)',
        // flex: '1 1 0%',
        // position: 'relative',
    },
    mtl1: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0px',
        display: 'flex',
        width: '100%',
        boxSizing: 'border-box',
        margin: '0px',
        minWidth: '0px',
    },
    mtlBtn: {
        userSelect: 'none',
        outline: 'none',
        border: 'none',
        fontSize: 'inherit',
        padding: '0px',
        margin: '0px',
        background: 'none',
        cursor: 'pointer',
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: '5px'
    },
    accountContainer: {
        padding: '1rem',
        border: '1px solid rgb(64, 68, 79)',
        borderRadius: '20px',
        position: 'relative',
        display: 'grid',
        rowGap: '12px',
        marginBottom: '20px',
    },
    ac1:{
        display:'flex',
        flexFlow:'row nowrap',
        justifyContent:'space-between',
        alignItems:'center',
        color:'rgb(255, 255, 255)',
    },
    ac11:{
       width:'initial',
       fontSize:'.95rem',
       color:'rgb(143, 150, 172)',
       fontWeight:'bolder'
    },
    disconnect:{
        width:'fit-content',
        marginLeft:'8px',
        padding:'4px 8px',
        border:'1px solid rgba(55, 107, 173, 0.44)',
        backgroundColor:'transparent',
        borderRadius:'12px',
        fontSize:'0.824rem',
        textAlign:'center',
        justifyContent:'center',
        display:'flex',
        cursor:'pointer',
        color:'rgb(33, 114, 229)'
    },
    ac12:{
        justifyContent:'space-between',
        width:'100%',
        fontSize:'1.25rem'
    },
    addressView:{}
}));

const TokenDetailsModal = (props: any) => {
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
                    <div className={(classes.size)}>
                        <div className={(classes.pM1)}>
                            <div className={classes.pmRow1}>
                                <div className={classes.token}>
                                    Account
                                </div>
                                <MdClose onClick={handleClose} style={{ cursor: 'pointer' }} size={24} color={'white'} />
                            </div>
                            <div>
                                <div>
                                    <div className={classes.accountContainer}>
                                        <div className={classes.ac1}>
                                            <div className={classes.ac11}>Connected with MetaMask</div>
                                            <div>
                                                <button className={classes.disconnect}>
                                                    Disconnect
                                                </button>
                                            </div>
                                        </div>
                                        <div className={classes.ac1}>
                                            <div className={classes.ac12}>
                                                <div className={classes.addressView}>
                                                    <span style={{fontWeight:'bold',fontSize:'20'}}>0x0d9f...Df78</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={classes.ac1}>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Box>
            </Modal>
        </>
    );
};
export default TokenDetailsModal;