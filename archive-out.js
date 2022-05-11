var file_system = require('fs')
var archiver = require('archiver')

var output = file_system.createWriteStream('out.zip')
var archive = archiver('zip')

output.on('close', function () {
    console.log(archive.pointer() + ' total bytes')
    console.log('archiver has been finalized and the output file descriptor has closed.')
})

archive.on('error', function(err){
    throw err
})

archive.pipe(output)

// append files from a sub-directory, putting its contents at the root of archive
archive.directory('out/', false)

// append files from a sub-directory and naming it `new-subdir` within the archive
// archive.directory('subdir/', 'new-subdir')

archive.finalize()