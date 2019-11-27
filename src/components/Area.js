import React from 'react'

class AreaComponent extends React.Component {
	
	renderData = (data) => {
		return data.map(({AreaId, AreaName}) => {
			return (
				<li key={AreaId}>{AreaId} : {AreaName} 
					<button onClick={() => { 
						this.props.setID("AreaId", AreaId)
						this.props.getZoneData(AreaId)
					}}>Go
					</button>
				</li> 
			)	
		})	
	}

	render() {
		return (
			<div>
				<h3>Areas:</h3> 
				{this.renderData(this.props.data)}
			</div>	
		)
	}
}

export default AreaComponent







