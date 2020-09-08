import React from 'react';

const PrintJson = () => {

  const json = () => {
    const json = '{"result":true, "count":42}';
    const obj = JSON.parse(json);

    console.log(obj.count);
  }

  return (
    <div className="PrintJson">
      <PrintJson
        json
      />
    </div>
  )
}

export default PrintJson;