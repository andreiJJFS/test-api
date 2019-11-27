import React from 'react'

class DataComp extends React.Component {
	state= {
		id: "",
		name: ""
	}
	
	componentDidMount() {
		let keys = Object.keys(this.props.data[0])
		this.setState({ id: keys[0]})
		this.setState({ name: keys[1]})
	}

	renderData = (data, id, name) => {
		return data.map((data) => {
			return (
				<li key={data[id]}>{data[id]} : {data[name]} 
					<button onClick={() => { 
            this.props.setID("ZoneId", data[id])
            this.props.getCategoryData(data[id]) 
            }}>Go
          </button>
				</li>
			)	
		})	
	}

	render() {
		console.log(this.props.data)
		return (
			<div>
				<h3>{this.props.name}: {this.props.currentLoc}</h3>
        {this.props.data.length && this.renderData(this.props.data, this.state.id, this.state.name)}
      </div>
			
		)
	}
}

export default DataComp