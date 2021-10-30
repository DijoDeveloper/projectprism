import { FiInfo, FiSettings } from "react-icons/fi";

import { Button } from '@mui/material';
import { IoMdArrowDown } from 'react-icons/io'
import { MdKeyboardArrowDown } from "react-icons/md";
import ModalContainer from './ModalContainer';
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import SettingsModal from './SettingsModal'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        padding: '105px 16px 0px',
        alignItems: 'center',
        flex: '1 1 0%',
        zIndex: 1,
    },
    main: {
        position: 'relative',
        maxWidth: '480px',
        width: '100%',
        background: 'rgb(25, 27, 31)',
        borderRadius: '24px',
        marginTop: '1rem',
        display: 'block',
        // boxShadow:'#b3924f 0px 0px 4px, #b3924f 0px 0px 2px, #b3924f 0px 0px 2px, white 0px 0px 20px'
        boxShadow: '0px 0px 3px #b3924f, 0 0 20px #696969, 0 0 20px #666666, 0 0 40px #505050'

    },
    mainDiv1: {
        padding: '1rem 1.25rem 0.5rem',
        width: '100%',
        color: 'rgb(195, 197, 203)',
    },
    mainDiv1S1: {
        width: '100%',
        display: 'flex',
        padding: '0px',
        alignItems: 'center',
        boxSizing: 'border-box',
        margin: '0px',
        minWidth: '0px',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: '0.5rem'
    },
    swapHeadDiv: {
        color: 'rgb(195, 197, 203)',
        display: 'flex',
        padding: '0px',
        alignItems: 'center',
        justifyContent: 'flex-start',
        boxSizing: 'border-box',
        margin: '0px',
        minWidth: '0px',
    },
    settingsDiv: {
        color: 'rgb(195, 197, 203)',
        display: 'flex',
        padding: '0px',
        alignItems: 'center',
        justifyContent: 'flex-start',
        boxSizing: 'border-box',
        margin: '0px',
        minWidth: '0px',
    },
    settingsView: {
        marginLeft: '0.5rem',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        textAlign: 'left',
    },
    settingsBtn: {
        position: 'relative',
        width: '100%',
        border: 'none',
        backgroundColor: 'transparent',
        margin: '0px',
        padding: '0px',
        borderRadius: '0.5rem',
        height: '20px',
    },
    swapPage: {
        position: 'relative',
        padding: '8px',
    },
    sp1: {
        display: 'grid',
        gridAutoRows: 'auto',
        rowGap: '8px',
    },
    sp11: {
        display: 'flex',
        flexFlow: 'column nowrap',
        position: 'relative',
        borderRadius: '20px',
        backgroundColor: 'rgb(44, 47, 54)',
        zIndex: 1,
        width: 'initial'
    },
    spSubVIew: {
        borderRadius: '20px',
        border: '1px solid rgb(44, 47, 54)',
        backgroundColor: 'rgb(33, 36, 41)',
        width: 'initial',
    },
    spSv1: {
        display: 'flex',
        flexFlow: 'row nowrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem 1rem 0.75rem'
    },
    spSv2: {
        justifyContent: 'flex-end',
        display: 'flex',
        flexFlow: 'row nowrap',
        alignItems: 'center',
        color: 'rgb(255, 255, 255)',
        fontSize: '0.75rem',
        lineHeight: '1rem',
        padding: '0px 1rem 1rem',
    },
    swapText: {
        visibility: 'visible',
        alignItems: 'center',
        fontSize: '24px',
        // fontWeight: '500',
        backgroundColor: 'rgb(25, 27, 31)',
        color: 'rgb(255, 255, 255)',
        borderRadius: '16px',
        boxShadow: "rgb(0 0 0 / 8%) 0px 6px 10px",
        outline: 'none',
        cursor: 'pointer',
        userSelect: 'none',
        border: 'none',
        height: '2.4rem',
        width: 'initial',
        padding: '0px 8px',
        justifyContent: 'space-between',
        marginRight: '12px',
    },
    swapT: {
        display: 'block',
        color: 'rgb(255, 255, 255)',
        fontWeight: 'bolder',
        fontSize: '16px',
    },
    input: {
        filter: 'none',
        opacity: '1',
        transition: 'opacity 0.2s ease-in-out 0s',
        color: 'rgb(255, 255, 255)',
        width: '0px',
        position: 'relative',
        // font-weight: 500,
        outline: 'none',
        border: 'none',
        flex: '1 1 auto',
        backgroundColor: 'rgb(33, 36, 41)',
        fontSize: '24px',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        padding: "0px",
        appearance: 'textfield',
        textAlign: 'right',
    },
    sText1: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    },
    sText1Sub1: {
        width: 'fit-content',
        display: 'flex',
        padding: '0px',
        alignItems: 'center',
        justifyContent: 'flex-start',
        boxSizing: 'border-box',
        margin: '0px',
        minWidth: '0px',
    },
    subImg: {
        marginRight: '0.5rem',
        width: '24px',
        height: '24px',
        boxShadow: 'rgb(0 0 0 / 8%) 0px 6px 10px',
        borderRadius: '24px',
    },
    subImgText: {
        margin: '0px 0.25rem',
        fontSize: '18px',
    },
    spsV21: {
        width: '100%',
        display: 'flex',
        padding: '0px',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    spsv22: {
        filter: 'none',
        opacity: '1',
        transition: 'opacity 0.2s ease-in-out 0s',
    },
    spsv23: {
        boxSizing: 'border-box',
        margin: '0px',
        minWidth: '0px',
        // fontWeight: '400',
        fontSize: '14px',
        color: 'rgb(178, 185, 210)'
    },
    sp12: {
        padding: '2.5px',
        borderRadius: "12px",
        height: '18px',
        width: '22px',
        position: 'relative',
        marginTop: '-14px',
        marginBottom: '-14px',
        left: 'calc(50% - 16px)',
        backgroundColor: 'rgb(33, 36, 41)',
        border: '4px solid rgb(25, 27, 31)',
        zIndex: 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    walletBtn: {
        alignItems: 'center',
        cursor: 'pointer',
        fontSize: '1rem',
        borderRadius: '16px',
        boxShadow: 'rgb(0 0 0 / 8%) 0px 6px 10px',
        width: '100%',
        position: 'relative',
        zIndex: 1,
        willChange: 'transform',
        transition: 'transform 450ms ease 0s',
        transform: 'perspective(1px) translateZ(0px)',
        border: '1px solid #b3924f',
        padding: '16px',
        textAlign: 'center',
        textDecoration: "none",
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'nowrap',
        color: '#b3924f',
        fontWeight: 'bolder',
        background: '#3d3d3d',
        marginTop: "5px"
    },
    spc1: {
        height: '16px',
        display: 'flex',
        padding: '0px',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: 'fit-content',
        boxSizing: 'border-box',
        margin: '0px',
        minWidth: '0px'
    },
    spc11: {
        display: 'inline',
        cursor: 'pointer',
        fontSize: '13px',
        color: 'silver',
        marginLeft: '5px',
    },
    spc2: {
        filter: 'none',
        opacity: 1,
        transition: 'opacity 0.2s ease-in-out 0s',
    },
    spc21: {
        display: 'inline',
        cursor: 'pointer',
        fontSize: '13px',
        color: 'silver',
        marginLeft: '5px',
    },
    btmC: {
        width: '100%',
        display: 'flex',
        padding: '3px',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxSizing: 'border-box',
        margin: '0px',
        minWidth: '0px',
        paddingLeft:'5px'

    },
    btmc1: {
        display: 'flex',
        padding: '0px',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: 'fit-content',
        position: 'relative'
    }

}));

const Navbar = () => {
    const classes = useStyles();

    const [openModal, toggleModal] = React.useState(false);
    const [showSettings, toggleSettings] = React.useState(false);

    const handleOpen = () => toggleModal(true);
    const handleClose = () => toggleModal(false);

    const openSettings = () => toggleSettings(true);
    const closeSettings = () => toggleSettings(false);

    return (
        <div className={classes.container}>
            <>
                <main className={classes.main}>
                    <div className={classes.mainDiv1}>
                        <div className={classes.mainDiv1S1}>
                            <div className={classes.swapHeadDiv}>
                                <div className={classes.swapT}>Swap</div>
                            </div>
                            <div className={classes.swapHeadDiv} style={{ marginRight: '1rem' }}>
                                <div className={classes.settingsView}>
                                    <Button onClick={openSettings} className={classes.settingsBtn}>
                                        <FiSettings size={18} />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.swapPage}>
                        <div className={classes.sp1}>
                            <div>
                                <div className={classes.sp11}>
                                    <div className={classes.spSubVIew}>
                                        <div className={classes.spSv1}>
                                            <button
                                                onClick={handleOpen}
                                                className={classes.swapText}
                                            >
                                                <span className={classes.sText1}>
                                                    <div className={classes.sText1Sub1}>
                                                        <img
                                                            className={classes.subImg}
                                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAADxdJREFUeJztXVtzFMcVplwuP8VVeYmf7HJ+RKqSl/AQP6X8H+yqXUEIjhMnQY5jO9oVCIzA5mowdzAYG4xAGAyWLC5G3IyDL8gOASUYKrarYGZWC7qi23b6692VV6uZ7e6ZnT3di07VV6JUaLfnnG+6z+lz+vScOXUoL6SzP52/2PtlQ9p7piHlLU2k3P2JJqcjkXLO8589/OdN/tPjvx8VEP8Wv+sp/J8O/A3+Fp+Bz8JnUj/XrPjIwjT7ybxm57fJlLsy2eR2cwPe4QZksYB/Nr4D34XvxHdTP/8DJ+k0e4S/lb9Jpr2WZJNzgRtjPDaDS4DvFmPgY8GYMDZq/dStNKQzv0qmnA1c6RkqgysQIoMxYqzU+qoLWZDO/jyZdl7lir1ObdwQZLiOseMZqPVonSTS7i+4AtsTTW6O2pDR4ebEs/Bnotar8dKw2Pk1n0I76Y0W16zgdOIZqfVsnCSbvaeEB2+AkWpCBEQS/Jmp9U4u3Fl6nIdWB6gNQgb+7NABtR1qLjxcejiZdhfxKXGA3AjUswHXAXQBnVDbpSbCPeO5fAr8hlrxpgE6gW6o7ROb5N96Z3l9ePZxgUcMXEd1NxssbMk8kWxyztEr2A5AV3XjGySb3acTSLYYoFjL4EF31PYLLXwaeyiZcltnp/woEJtIrdAltT21BEkR7tnuo1dgfQC6tCbRlGh1H02k3C5qpalg/bt3WdOGDPk4lACdct1S27eiLEgPPMbDmcvkylLAgiUOc/sm2LHuITavmX48KoBun1828DNqO/tKsiX7JF+zeqmVpIqPzg2xyckc++Sfw2ImoB6POtxe6Jra3tMEb75Nxv/Hmxk2MZGbIsCpz4bZn1d45OPSIQF0Tm13IViXbJn2i+i9NcYgRQIA+zsGyMelA6Fzap8AnqktDl8RO9r7WVFKCQAs3dJHPj4tcN2TRQcizrcs1Hv+NZf1D04GEqDj/JBwDqnHqYNCiFj7fYL8Jg+9AnTQfXmYlUo5AYAtbffIx6lNAm6L2hpfbO/atcO3dGsfy+VyUgIAL66yySEE3FzNto2R2ElYtrffkHbYd7fHWbkEEeDQyUHk6cnHrQkPtonV+CKla2FWDx6+nwQRAFi5K0s+bl3ANrGmkvP5fPoH1cFfX/fYyP2cNgG6Lg6z55a55OPXJgG3UVzGn2vbug98fvW+r/FlBADePtJPPn59iKKS6lYW5ad++8q4Vu+5G2h8FQIAr663JFlUAtiqqksBZ1Uj9UPp4neLHeb0TUQmwNEzg2xemv559OE2VsX4KE2ysXoXhpOJCgGAdXttShblAZtVpayMe5Zt1A+ji5fXZdj4uL/jF4YApy4NsxdaLXQIue2iGb/Ze4r6IcLg6rejUuPrEAB47yO7kkVTJIhyAsnG41rYylUVHQIAizdZlixqyh9DC2V8HGKkHrwuELffHZiUWz4kAVBEAueS+jl1EepAqo2ndLFW64guAYBNB2xMFjmdWsbHWXbqQesC0zMMGjcBgEVv2JYs4tDpT5BvzmDAoBWBxM2tH8a0jB+FAAe77EsWwaZKxkdLE9u2fPce65dbu4oEAFp32JYscnNK7WrQ14Z+sOpAMefwiLrjVy0CdF0cYguX2rU3ANtKCWBTdS9wqWcklPGjEgDYcdiuZBEaV1U0PtqbUQ9SB6/vyoY2fjUIALy81q5kUcUWduhxRz1AVcxvdthtb2aVT60JcOT0oKg4otaHKmBjX+OLA50GN2Esx+FT8mRPLQgAIO1MrQ91ArgZ31JytDqlHpwqXlrjsbExvZg/TgKcvDTM/rjcHocQtp45/ae9FuqBqeLr/6gle2pFAAChKLVeVAFbzyRAk3OBemAq2LhfPdlTSwIA6Y12JItg62nGR9tzyq7bqljY4rK+e5WrfCgJcPzskHBOqfUkJQC39bRW9+h9Tz0oFXx8Yahqxo+DAMCGfXY4hLB5SfjnrqQekAypjRntZA8FAU5/NixK0an1JQNsXrL+m1/4ceM7/WRPJcExsas3Rtn7nQNVJ8GBj82vHppWKBLrNStVAOrzqyWjPHzEWQGEbjBW81t9bPn2LNt9tF/UE1SLBMu2Ge4QcpsL4+MyJPLBVADi68HhcMmeUrnbP8kufDUyw8ggQBHoD7Dt4D3WyX2NqASAv/L7Fnr9VYK4CAs3YlEPpBLOfxk+2QP5wRlnZy7ztTnAUKUEKGLJpj72JnfmUFoehQTbDpldPQTb8/Xfe5Z6IEHA1BxWem+N8rdd/ib7EaAUq/dkxZoelgTYtaTWYxBwJR7y/8uoB+IHnMbB26sjY+M59uU1vr5/qj6FywhQxIodWfbOh/2ioZQOAZCzMLV6CLafU7hUkXww5Wjr8j/S7Sdo+3LxyojSGx+WAFN+wtY+tp1P7V0afsIbbxtaPcRtb2T1b+Mqj90flcf8t91x1v158PoeBwGKWLy5j23kfsIxBT/h5KfDoj8RtV7LIaqFTcwBfHUt+Eg35L//G2WnqxSyhSVAKdZwP+FgV2U/Yc9R85JFIieQwH25BgymCHTt9JPxiRy7ch3xe/QQrdoEKGLlzqzICgb5CQb2Je6ZU7g0mXogAmjR5mWnJ3uwB3Dp65nxu4kEKGIZ9xN2tN9jJy5OJ6txfYm57TEDGNPwCdm0otzJTLCzX+T31uMwfJwEmNpP2NLHNu2/y453/0gEw/oSe3MK16dTD2Sqf+/N78diN3qtCDDlMG7qY2v33mWHTg6Y1ZeY294YAhw7Ozi1P19L1IIA0/yEXdxpfMeQWUAQwJAlAClUtHOrdwL8fW3GpBPGnlFOIIDp8lh3dT19EwiAJe4PprWdKziBRoWBALaB1/JpEhsothMAdYJY8w3dDhZh4HkDBuIL7J7t+qDfWgKg57BRYV85uO0xA3SQD0SCl9ZkRP9eWwjwyrqM8bUABXQYkwySpU0xhb62Lcs6z5u7E4idPpUDIn8ypeOYSAYZkg5esTPLPr0yIu2+gd1CnA3QTcvGSYA0B6IY2TpfXNLQxo5a30BDyluKI2HPUA+kCHj/qNlDDl0WKsGxevd49LAxqvGxPM2XjBV+AJpNYp/DpJ1AURBiUkkYvP9i9S9yAnjTZX+DaffoJ+H9g7CGR1j3nEKDCIS12OLGd6HGwaRoQJSEmVYU+rfVHhu+/2MR6LWbo+JMQGUmO6Lo4kSIsDFMWKfSNRRLWWnJOdrPm3aAVBSFmlgWXt7sEQc4kB+QKRBv5Pb2e7ERAIUqssbROL629eDMMSzZbFiZeLEs3NSDISjhLpeh4Umx7ssaMiD+bpMUaOgQAE6b7DYxjAkdS7ouzoxScFUdtT7LMe1giIlHw/AmORn/g6AoFlWps0OdP7p7hiUA/AuVUi74A+gU4vf5KC2XOYkkBCg9Gmbq4VBMm0gRBwkqgGX7B1A+PO+ggpKgsO4vK+VhHXwBVAAFkQuhqqk3kE07HGry8XDU5FcStIWHl40Zo9LnwH9AXZ6MAHBCZUe8EaLiFLBsL2LVbjOrgWccDze5QQTeQpX27zj6tV3hJM4r6zPsg5Lpemr7lv9eRiIA5V4dCruR+wxuLz+jQYTpLWIwHQ8MqZ0P/Pb7MdYiuQMYpMLOI87vIcRU2ZrFUnPwhNp+A7arTb5xzLdFjOlNorCTpio4+o0zhSBOpc+EZy+LKJDD33lYLyNpYPXvNPg2ibKhTRzqA3QE9wUiHAzTtgXx/po9+jUJpreTD2wTlw8HzW4UCY/e7wpYmSCc1NmDRxQQpioJOQzTbxgLbBSZXwbMbxWLmDtsj8B/3RiteA8gMnr7QtYlItEjW3JMQMVWsflZwL1OPUgZEM6FFWwrI2dQWp+H4o3NB/S2kMuBo+zUepFB2ixaEMCSdvFf/Lvy+UGZIKpAW5hiNBDF+Cae+/MlgEq7eFsujMAWbdSegdXoEoZNKFmewAwoXhhRWAasuDIGTRuitI57kNrFK18ZA7Hp0qgPz4RvHhmVACZV90ihc2lUfhYwr3GEHxrS4XsIRiEAchQmVfdUgva1cRCbLo58sayKKG4CIOdvWnVPxZckzMWRYhYwsFAkCDpXxkYlgHHVPRUQ+upYQQDLLo/W7SkYhgAoOaN+Ti0CRLk8GpJIOQeoH0IVSOfeCagiqgYBUH1sYnVPILjtIhkf0pDOPM6diAHyh1EEpufxClVEYQmA4o9Gi66Mhc1gu8gEgCTT7iLqB9KBrIooDAGM7fUXRABus6oYH5JOs4e5M/EN9UNpsF+0gq8WAd4zuLrH9/m5rWCzqhEAkkw7c23YIi4CmTl0EI1KAFHdY9UVsW4Otqqq8UtIsJz+AdWBJhNRCYD0M/Vz6AA2isX4kPxS4JyjfkgdVKoikhHgrfctC/m4bao+9ZfLwpbMEwlDGkupoFIVUSUCtJ80v7qnDB5sE6vxi5Jsdp+2yR9AFdCoTxVREAEwaxjTy08JfN3nNqmJ8adIkHJb6R9cHbt9qoiCCIBOJNTj1QFsUVPjQ/ha8xCPNfdRP7wOcFmUjAC7j9hR3TNlfG4D2KLmBCiQ4JFEyu2iVoIqyquIyglgT3VPAVz3gSXetZJEq/tossm9TK4MRbSWVBGVEwDtXqjHpwqhc657UuMXZUF64DHuiPRSK0UVOLJdTgCcPKIelzrcXuic2u7TJNmSfdIWEhSriIoEsKm6BzqGrqnt7StgpS3LAc7to+MIqntMvM/HD9CtcW9+uWBdssUxxDk+dPGiHocSoFNT1nyZiIOmloWIJqMQ6tF6+7oi9gnEZpE9O4bmwc1Bh2RxfjUkv21sT+7AIHg1396NS5CksC2LSAnoqmaJnVqJSCWLeoLZJSEYophjeewpXUpBtYpN5WW1AnQSWyWPaQKGc7Y32lRtHJvhhQ7cxrp+64NElJw3OW3URqB76522qpVu2yw4vWLTMbTohne7I5/YqUfBIUZbTiWHMjx/ttAHNR8kwVn2fJOKeogYxGZOu/b5/FnJt6vJ9yyyI8tYZvhejF25LcusVBa0N0OPO5ObWWJsGKO0FdushBckRdDqFP1u0fSYsss5vluMgY8FY7IuYVMPgrbn6H2PCxBEJBHn9Tf8s4UHz78L3zmj5fqsmCG4DAk3YiWbvGfFvYgpdz888EJL/J7Chdkerk8XEP8Wv+vJzyo8EsHf8L/FZ+Czpi5YqjP5P2ey0rAsl+yGAAAAAElFTkSuQmCC"
                                                            alt="ethereum logo"
                                                        />
                                                        <span className={classes.subImgText}>
                                                            ETH
                                                        </span>
                                                    </div>
                                                    <MdKeyboardArrowDown />
                                                </span>

                                            </button>
                                            <input
                                                // value={''}
                                                inputMode='decimal'
                                                autoComplete='off'
                                                autoCorrect='off'
                                                type='text'
                                                pattern='^[0-9]*[.,]?[0-9]*$'
                                                minLength={1}
                                                maxLength={79}
                                                spellCheck='false'
                                                placeholder='0.0'
                                                className={classes.input} />
                                        </div>
                                        <div className={classes.spSv2}>
                                            <div className={classes.spsV21}>
                                                <div className={classes.spc1}>
                                                    <div className={classes.spc11}>Balance: 0 ETH</div>
                                                </div>
                                                <div className={classes.spc2}>
                                                    <div className={classes.spc21}>
                                                        ~$
                                                        <span style={{ color: 'silver', marginLeft: 5 }}>95,847.2</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={classes.sp12}>
                                    <IoMdArrowDown style={{ height: 17, width: 17, color: 'rgb(143, 150, 172)' }} />
                                </div>
                                <div className={classes.sp11}>
                                    <div className={classes.spSubVIew}>
                                        <div className={classes.spSv1}>
                                            <button
                                                onClick={handleOpen}
                                                className={classes.swapText}
                                                style={{ background: '#b3924f' }}
                                            >
                                                <span className={classes.sText1}>
                                                    <div className={classes.sText1Sub1}>
                                                        <span className={classes.subImgText}>
                                                            Select a token
                                                        </span>
                                                    </div>
                                                    <MdKeyboardArrowDown />
                                                </span>
                                            </button>
                                            <input
                                                // value={''}
                                                inputMode='decimal'
                                                autoComplete='off'
                                                autoCorrect='off'
                                                type='text'
                                                pattern='^[0-9]*[.,]?[0-9]*$'
                                                minLength={1}
                                                maxLength={79}
                                                spellCheck='false'
                                                placeholder='0.0'
                                                className={classes.input} />
                                        </div>
                                        <div className={classes.spSv2}>
                                            <div className={classes.spsV21}>
                                                <div className={classes.spc1}>
                                                    <div className={classes.spc11}>Balance: 0 ETH</div>
                                                </div>
                                                <div className={classes.spc2}>
                                                    <div className={classes.spc21}>
                                                        ~$
                                                        <span style={{ color: 'silver', marginLeft: 5 }}>95,847.2</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.btmC}>
                                <div className={classes.btmc1}>Price</div>
                                <div className={classes.btmc1}>
                                    <div className={classes.spc21}>
                                        1 DAI = 0.0002296 ETH ($1.00108) 
                                        <span style={{ color: 'silver', marginLeft: 15 }}><FiInfo size={16} style={{position:'absolute',right:'-4'}} /></span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <button className={(classes.swapText, classes.walletBtn)} style={{}}>
                                    Connect Wallet
                                </button>
                            </div>
                        </div>
                    </div>
                </main>
                <ModalContainer
                    openModal={openModal}
                    handleClose={handleClose}
                />
                <SettingsModal
                    openModal={showSettings}
                    handleClose={closeSettings}
                />
            </>
        </div>
    );
};
export default Navbar;
