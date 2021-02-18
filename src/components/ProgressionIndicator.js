import { useState, useEffect } from 'react'
import LinearProgress from '@material-ui/core/LinearProgress'
import { useStyles } from 'styles/progressionIndicator'

export default function ProgressionIndicator() {
  const classes = useStyles()
  const [progress, setProgress] = useState(25)

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setProgress((oldProgress) => {
  //       if (oldProgress === 100) {
  //         return 0
  //       }
  //       const diff = Math.random() * 10
  //       return Math.min(oldProgress + diff, 100)
  //     })
  //   }, 500)

  //   return () => {
  //     clearInterval(timer)
  //   }
  // }, [])

  return (
    <div className={classes.root}>
      <div className={classes.infoText}>You have 1/4 notes completed</div>
      <LinearProgress variant="determinate" value={progress} />
    </div>
  )
}
