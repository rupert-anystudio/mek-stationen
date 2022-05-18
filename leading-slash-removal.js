const replace = require('replace-in-file')

const replaceCssUrl = () => {
  const config = {
    files: [
      'out/**/*.css',
    ],
    from: /url\(\//g,
    to: 'url(../../../'
  }
  replace(config)
    .then(results => {
      console.log('replaceCssUrl:', results);
    })
    .catch(error => {
      console.error('Error replaceCssUrl:', error);
    })
}

const replaceHref = () => {
  const config = {
    files: [
      'out/**/*.html',
    ],
    from: /href="\//g,
    to: 'href="'
  }
  replace(config)
    .then(results => {
      console.log('replaceHref:', results);
      replaceCssUrl()
    })
    .catch(error => {
      console.error('Error replaceHref:', error);
    })
}

replace({
  files: [
    'out/**/*.html'
  ],
  from: /src="\//g,
  to: 'src="'
})
  .then(results => {
    console.log('replaceSrc:', results);
    replaceHref()
  })
  .catch(error => {
    console.error('Error replaceSrc:', error);
  })
