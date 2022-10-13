console.log("loding adblock...")
chrome.declarativeNetRequest.updateDynamicRules({
  addRules: [{
    'id': 1001,
    'priority': 1,
    'action': {'type': 'block'},
    'condition': {'urlFilter': "*://pagead2.googlesyndication.*/*",
      'resourceTypes': [
        'csp_report', 'font', 'image', 'main_frame', 'media', 'object', 'other', 'ping', 'script',
        'stylesheet', 'sub_frame', 'webbundle', 'websocket', 'webtransport', 'xmlhttprequest'
      ]
    }
  },
{
    'id': 1002,
    'priority': 1,
    'action': {'type': 'block'},
    'condition': {'urlFilter': "*://yandex.ru/ads",
      'resourceTypes': [
        'csp_report', 'font', 'image', 'main_frame', 'media', 'object', 'other', 'ping', 'script',
        'stylesheet', 'sub_frame', 'webbundle', 'websocket', 'webtransport', 'xmlhttprequest'
      ]
    }
  }, 
{
    'id': 1003,
    'priority': 1,
    'action': {'type': 'block'},
    'condition': {'urlFilter': "*://ads.*.*/*",
      'resourceTypes': [
        'csp_report', 'font', 'image', 'main_frame', 'media', 'object', 'other', 'ping', 'script',
        'stylesheet', 'sub_frame', 'webbundle', 'websocket', 'webtransport', 'xmlhttprequest'
      ]
    }
  },
{
    'id': 1004,
    'priority': 1,
    'action': {'type': 'block'},
    'condition': {'urlFilter': "*://an.*.*/*",
      'resourceTypes': [
        'csp_report', 'font', 'image', 'main_frame', 'media', 'object', 'other', 'ping', 'script',
        'stylesheet', 'sub_frame', 'webbundle', 'websocket', 'webtransport', 'xmlhttprequest'
      ]
    }
  },
{
    'id': 1005,
    'priority': 1,
    'action': {'type': 'block'},
    'condition': {'urlFilter': "*://a.adtng.com/*",
      'resourceTypes': [
        'csp_report', 'font', 'image', 'main_frame', 'media', 'object', 'other', 'ping', 'script',
        'stylesheet', 'sub_frame', 'webbundle', 'websocket', 'webtransport', 'xmlhttprequest'
      ]
    }
  },
{
    'id': 1006,
    'priority': 1,
    'action': {'type': 'block'},
    'condition': {'urlFilter': "*://nicksstevmark.com/*",
      'resourceTypes': [
        'csp_report', 'font', 'image', 'main_frame', 'media', 'object', 'other', 'ping', 'script',
        'stylesheet', 'sub_frame', 'webbundle', 'websocket', 'webtransport', 'xmlhttprequest'
      ]
    }
  },
{
    'id': 1007,
    'priority': 1,
    'action': {'type': 'block'},
    'condition': {'urlFilter': "*://yahoo.adclixx.net/*",
      'resourceTypes': [
        'csp_report', 'font', 'image', 'main_frame', 'media', 'object', 'other', 'ping', 'script',
        'stylesheet', 'sub_frame', 'webbundle', 'websocket', 'webtransport', 'xmlhttprequest'
      ]
    }
  },
{
    'id': 1008,
    'priority': 1,
    'action': {'type': 'block'},
    'condition': {'urlFilter': "*://*.adclixx.net/*",
      'resourceTypes': [
        'csp_report', 'font', 'image', 'main_frame', 'media', 'object', 'other', 'ping', 'script',
        'stylesheet', 'sub_frame', 'webbundle', 'websocket', 'webtransport', 'xmlhttprequest'
      ]
    }
  },
{
    'id': 1009,
    'priority': 1,
    'action': {'type': 'block'},
    'condition': {'urlFilter': "*://onetouch4.com/*",
      'resourceTypes': [
        'csp_report', 'font', 'image', 'main_frame', 'media', 'object', 'other', 'ping', 'script',
        'stylesheet', 'sub_frame', 'webbundle', 'websocket', 'webtransport', 'xmlhttprequest'
      ]
    }
  },
{
    'id': 10010,
    'priority': 1,
    'action': {'type': 'block'},
    'condition': {'urlFilter': "*://client.crisp.chat/*",
      'resourceTypes': [
        'csp_report', 'font', 'image', 'main_frame', 'media', 'object', 'other', 'ping', 'script',
        'stylesheet', 'sub_frame', 'webbundle', 'websocket', 'webtransport', 'xmlhttprequest'
      ]
    }
  },
{
	'id': 10011,
    'priority': 1,
    'action': {'type': 'block'},
    'condition': {'urlFilter': "*://*.mobilebanner.*/*",
      'resourceTypes': [
        'csp_report', 'font', 'image', 'main_frame', 'media', 'object', 'other', 'ping', 'script',
        'stylesheet', 'sub_frame', 'webbundle', 'websocket', 'webtransport', 'xmlhttprequest'
      ]
    }
}],
removeRuleIds: [1001,1002,1003,1004,1005,1006,1007,1008,1009,10010,10011],
})