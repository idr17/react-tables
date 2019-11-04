import React from 'react'

const HeaderTable = (props) => {

	const headerComp = () => {
		return (
			<React.Fragment>
			{
				props.float === 'right' ? (
					<React.Fragment>
						<div className="divx left">
							Current Bid
						</div>
						<div className="divx header">
							<div>Total</div>
							<div>Quantity</div>
							<div>Price</div>
						</div>
					</React.Fragment>
				) : (
					<React.Fragment>
						<div className="divx right">
							Current Ask
						</div>
						<div className="divx header">
							<div>Total</div>
							<div>Quantity</div>
							<div>Price</div>
						</div>
					</React.Fragment>
				)
			}
			</React.Fragment>
		)
	}

	return (
		<div>
			{ headerComp() }
		</div>
	)
}

export default HeaderTable