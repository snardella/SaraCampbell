module.exports = function(grunt) {
    require('time-grunt')(grunt);
    require('load-grunt-config')(grunt, {
        jitGrunt: {
            staticMappings: {
                scsslint: 'grunt-scss-lint'
            }
        }
    });

    grunt.loadNpmTasks('grunt-run');
	grunt.loadNpmTasks('bigcommerce-sitewide-banners');
    grunt.registerTask('default', ['eslint', 'jest', 'scsslint', 'svgstore'])
};
