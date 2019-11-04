import React from 'react'

const CustomHtml = (props) => {

  const renderFields = () => {
    
    let name = props.index +''+ props.name

    return (
      <div>
        {
          props.float === 'right' ? (
            <React.Fragment>
              <style dangerouslySetInnerHTML={{
              __html: [
                ' .divx'+ name + ' {',
                ' width: 49%;',
                ' height: 25px;',
                ' position:relative;',
                ' }',
                '.divx'+ name +':after {',
                '  content: "";',
                '  position: absolute;',
                '  background-color:rgba(182, 244, 204, 0.6);',
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
                ' height: 25px;',
                ' position:relative;',
                ' }',
                '.divx'+ name +':after {',
                '  content: "";',
                '  position: absolute;',
                '  background-color:rgba(197, 121, 1, 0.6);',
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
