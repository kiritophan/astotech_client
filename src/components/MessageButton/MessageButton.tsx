import React from 'react';
import './messageButton.scss';
import { Modal } from 'antd';
type MessageButtonProps = {
    setOpenChat: Function,
}

export default function MessageButton(props: MessageButtonProps) {
    return (
        <button className="btn-94" onClick={() => {
            Modal.confirm({
                content: "Mở khung chat với tài khoản của bạn?",
                cancelText: "Cancel",
                okText: `Ok`,
                onOk: () => {
                    props.setOpenChat(true)
                },
                onCancel: () => {

                }
            })
        }} style={{ position: "fixed", right: "50px", bottom: "50px" }}>
            <svg viewBox="0 0 512 512">
                <path
                    d="M309.333,341.333c29.419,0,53.333-23.936,53.333-53.333V96c0-29.397-23.915-53.333-53.333-53.333h-256
				C23.915,42.667,0,66.603,0,96v192c0,29.397,23.915,53.333,53.333,53.333h32v53.333c0,4.032,2.283,7.723,5.888,9.536
				c1.493,0.747,3.136,1.131,4.779,1.131c2.261,0,4.523-0.725,6.4-2.133l82.496-61.867H309.333z"
                ></path>
                <path
                    d="M458.667,106.667h-64c-5.888,0-10.667,4.779-10.667,10.667V288c0,41.173-33.493,74.667-74.667,74.667H195.563
				c-2.304,0-4.565,0.747-6.4,2.133l-17.685,13.269c-2.731,2.048-4.309,5.248-4.267,8.64c0.043,3.392,1.685,6.571,4.459,8.555
				c9.173,6.592,19.904,10.069,30.997,10.069h124.437L409.6,467.2c1.877,1.408,4.117,2.133,6.4,2.133
				c1.621,0,3.264-0.384,4.779-1.131c3.605-1.813,5.888-5.504,5.888-9.536v-53.333h32C488.085,405.333,512,381.397,512,352V160
				C512,130.603,488.085,106.667,458.667,106.667z"
                ></path>
            </svg>
        </button>
    )
}