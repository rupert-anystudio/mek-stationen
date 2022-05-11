const replace = require('replace-in-file')

// const glob = require('glob')
// glob(__dirname + '/out/**/*.html', {}, (err, files)=>{
//   console.log(files)
// })

const replaceLinks = () => {
  const config = {
    files: [
      'out/**/*.html'
    ],
    from: /href="\//g,
    to: 'href="'
  }
  replace(config)
    .then(results => {
      console.log('Replacement results:', results);
    })
    .catch(error => {
      console.error('Error occurred:', error);
    })
}

replace({
  files: [
    'out/**/*.html'
  ],
  from: /src="\//g,
  to: 'src="'
  // from: /\/_next/g,
  // to: '_next'
})
  .then(results => {
    console.log('Replacement results:', results);
    replaceLinks()
  })
  .catch(error => {
    console.error('Error occurred:', error);
  })
