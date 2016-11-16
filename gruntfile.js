module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: [
                    'js/vendor/jquery/jquery1111min.js',
                    //'js/vendor/check_radio/icheck.js',
                    //'js/vendor/datepicker/bootstrap-datepicker.js',
                    //'js/vendor/inViewport/jquery.onscreen.js',
                    //'js/vendor/modal/remodal.min.js',
                    //'js/vendor/select/select2.full.min.js',
                    //'js/vendor/slider/slick.min.js',
                    //'js/vendor/tooltips/jquery.tooltipster.js',
                    //'js/vendor/range/ion.rangeSlider.js',
                    //'js/vendor/progressbar/circular/jquery.knob.js',
                    //'js/vendor/progressbar/linear/bootstrap-progressbar.js',
                    //'js/vendor/scrollbars/jquery.mCustomScrollbar.js',
                    //'js/vendor/range/ion.rangeSlider.js',
                    'js/vendor/material/materialize.js',
                    'js/vendor/ie/*.js'
                ],
                dest: 'js/vendor.min.js'
            }
        },
        sass: {                              // Task
            dist: {                            // Target
                options: {                       // Target options
                    style: 'expanded'
                },
                files: {                         // Dictionary of files
                    'less/vendor/material/materialize.less': 'vendor/materialize/sass/materialize.scss'       // 'destination': 'source'
                }
            }
        },
        less: {
            development: {
                options: {
                    paths: ["less/**/*"],
                    yuicompress: true,
                    compress: true
                },
                files: {
                    "css/cam.css": "less/cam.less"
                }
            }
        },
        cssnano: {
            options: {
                sourcemap: false
            },
            dist: {
                files: {
                    'css/cam.css': 'css/cam.css'
                }
            }
        },
        watch: {
            files: [
                'js/vendor/**/*.js',
                "vendor/materialize/sass/**/*",
                "less/**/*",
                "gruntfile.js"
            ],
            tasks: [
                "uglify",
                "sass",
                "less",
                "cssnano"
            ]
        }
    });

    // Loads
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-cssnano');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['watch']);
};
