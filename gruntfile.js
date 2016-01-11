module.exports = function(grunt) {

    grunt.initConfig({
        basepath: {
            app: 'src/main/node'
        },

        jasmine: {
            test: {
                src: [
                    '<%= basepath.app %>/*.js'
                ],
                options: {
                    specs: 'src/test/node/*.js',
                    version: '0.0.0',
                    display: 'full',
                    keepRunner: true,
                    summary: 'true'
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.registerTask('build', ['jasmine'])
};