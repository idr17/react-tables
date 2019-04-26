import React from 'react'

const CustomHtml = (props) => {

  const renderFields = () => {
    let name = props.index +''+ props.name
    console.log('name ' ,name)

    return (
      <div>
        {
          props.float === 'right' ? (
            <React.Fragment>
              <style dangerouslySetInnerHTML={{
              __html: [
                ' .divx'+ name + ' {',
                ' width: 49%;',
                ' height: 20px;',
                ' position:relative;',
                ' }',
                '.divx'+ name +':after {',
                '  content: "";',
                '  position: absolute;',
                '  background-color:rgba(0, 0, 0, 0.5);',
                '  top: 0;', 
                '  right: 0;',
                '  bottom: 0; ',
                '  width: ' + props.data.percent + '%;',
                '}'
                ].join('\n')
              }}></style>
    
              <div className={'divx' + name}>
                <div className="item">{props.data.total}</div>
                <div className="item">{props.data.amount}</div>
                <div className="item">{props.data.price}</div>
              </div>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <style dangerouslySetInnerHTML={{
              __html: [
                ' .divx'+ name +' {',
                ' width: 49%;',
                ' height: 20px;',
                ' position:relative;',
                ' }',
                '.divx'+ name +':after {',
                '  content: "";',
                '  position: absolute;',
                '  background-color:rgba(0, 0, 0, 0.5);',
                '  top: 0;', 
                '  left: 0;',
                '  bottom: 0; ',
                '  width: ' + props.data.percent + '%;',
                '}'
                ].join('\n')
              }}></style>
    
              <div className={'divx' + name}>
                <div className="item">{props.data.total}</div>
                <div className="item">{props.data.amount}</div>
                <div className="item">{props.data.price}</div>
              </div>
            </React.Fragment>
          )
        }
      </div>
    )
  }

  return (
    <div>
      { renderFields() }
    </div>
  )
}

export default CustomHtml
