import React from "react";


const styles = {
  no: {
    width: 70,
    textAlign: 'center',
    backgroundColor: 'skyblue'
  },
  title: {
    width: 600,
    backgroundColor: 'skyblue'

  },
  date: {
    width: 200,
    backgroundColor: 'skyblue'

  },
  id: {
    width: 100,
    backgroundColor: 'skyblue'

  },
  hit: {
    width: 90,
    backgroundColor: 'skyblue'

  },

  no1: {
    width: 70,
    textAlign: 'center',
  },
  title1: {
    width: 600,

  },
  date1: {
    width: 200,

  },
  id1: {
    width: 100,

  },
  hit1: {
    width: 90,

  }


}

function Board() {
  return (
    <div>
      <h2 style={{display: "flex", justifyContent: "center"}}>NEWJEANS</h2>
      <div style={{display: "flex", justifyContent: "center"}}>
        <table style={{textAlign: "center"}}>
          <thead>
          <tr className={'list-group list-group-horizontal'}>
            <th className={'list-group-item'} style={styles.no}>NO</th>
            <th className={'list-group-item'} style={styles.title}>Title</th>
            <th className={'list-group-item'} style={styles.id}>Singer</th>
            <th className={'list-group-item'} style={styles.date}>Date</th>
            <th className={'list-group-item'} style={styles.hit}>Hit</th>
          </tr>
          </thead>
          <tbody>
          <tr className={'list-group list-group-horizontal'}>
            <th className={'list-group-item'} style={styles.no1}>1</th>
            <th className={'list-group-item'} style={styles.title1}>Attention</th>
            <th className={'list-group-item'} style={styles.id1}>NewJeans</th>
            <th className={'list-group-item'} style={styles.date1}>2022. 08. 01.</th>
            <th className={'list-group-item'} style={styles.hit1}>1560156</th>
          </tr>
          <tr className={'list-group list-group-horizontal'}>
            <th className={'list-group-item'} style={styles.no1}>2</th>
            <th className={'list-group-item'} style={styles.title1}>Hype Boy</th>
            <th className={'list-group-item'} style={styles.id1}>NewJeans</th>
            <th className={'list-group-item'} style={styles.date1}>2022. 08. 01.</th>
            <th className={'list-group-item'} style={styles.hit1}>456456</th>
          </tr>
          <tr className={'list-group list-group-horizontal'}>
            <th className={'list-group-item'} style={styles.no1}>3</th>
            <th className={'list-group-item'} style={styles.title1}>Cookie</th>
            <th className={'list-group-item'} style={styles.id1}>NewJeans</th>
            <th className={'list-group-item'} style={styles.date1}>2022. 08. 01.</th>
            <th className={'list-group-item'} style={styles.hit1}>7536453</th>
          </tr>
          <tr className={'list-group list-group-horizontal'}>
            <th className={'list-group-item'} style={styles.no1}>4</th>
            <th className={'list-group-item'} style={styles.title1}>Hurt</th>
            <th className={'list-group-item'} style={styles.id1}>NewJeans</th>
            <th className={'list-group-item'} style={styles.date1}>2022. 08. 01.</th>
            <th className={'list-group-item'} style={styles.hit1}>456453</th>
          </tr>
          <tr className={'list-group list-group-horizontal'}>
            <th className={'list-group-item'} style={styles.no1}>5</th>
            <th className={'list-group-item'} style={styles.title1}>Ditto</th>
            <th className={'list-group-item'} style={styles.id1}>NewJeans</th>
            <th className={'list-group-item'} style={styles.date1}>2022. 12. 19.</th>
            <th className={'list-group-item'} style={styles.hit1}>213375</th>
          </tr>
          <tr className={'list-group list-group-horizontal'}>
            <th className={'list-group-item'} style={styles.no1}>6</th>
            <th className={'list-group-item'} style={styles.title1}>OMG</th>
            <th className={'list-group-item'} style={styles.id1}>NewJeans</th>
            <th className={'list-group-item'} style={styles.date1}>2023. 01. 02.</th>
            <th className={'list-group-item'} style={styles.hit1}>7852453</th>
          </tr>
          </tbody>
        </table>
      </div>
    </div>


  )
}

export default Board;