# Fontselect jQuery Plugin

A font selector to choose from fonts available as part of the Google Web Fonts api.

Let users easily select and preview a font from Google's large range of free fonts.


## Documentation

To create a font selector simply run the plugin on a standard html input element.

### How to use

        $('input.fonts').fontselect();

### Options

Fontselect has one argument, an options object that you might want to customise:

#### Simple options

* style: the class to give the new font selector
* placeholder: text to use when no font is selected yet
* lookahead: a number of fonts to try and preload ahead in the select box

        $('input.fonts').fontselect({
          style: 'font-select',
          placeholder: 'Select a font',
          lookahead: 2
        });

#### Advanced options

* fonts: an array which you can use to limit the fonts available on the select element.
It must follow the font family format used in Google's standard css URL
* fetch: Fetch an updated list from Google.
* apiKey: An optional key to append to the api URL when fetching the list.
Anonymously works but it may stop working or reach certain limits. Google
recommends using a key.  See
[Google Web Fonts' Developer API](https://developers.google.com/webfonts/docs/developer_api)
for more details.
* combine: Combined all variants of a single family instead of one per variant

        $('input.fonts').fontselect({
          fetch: true,
        });


### Events

Fontselect triggers the change event on the original element when a font is selected.
An example is included to show how this could be used to update the font on the current page.

        $('input.fonts').fontselect().change(function(){

          // replace + signs with spaces for css
          var font = $(this).val().replace(/\+/g, ' ');

          // log font name
          console.log(font);
        });


## Download

Releases are available for download from
[GitHub](http://github.com/tommoor/fontselect-jquery-plugin/downloads).
