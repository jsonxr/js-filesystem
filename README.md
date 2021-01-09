# js-filesystem
Universal js library for reading/writing files.

https://web.dev/storage-for-the-web/

# Node

In node, it uses the `fs` package to read/write.
# Browser

The default behavior of the implementation uses the best option available to the browser. The order of preference is as follows:

* File and Entries API
* IndexedDB
* LocalStorage

# Errors


Both IndexedDB and the Cache API both throw a DOMError named QuotaExceededError when you've exceeded the quota available.



# Options

### Supported

The following web API was chosen to support a generic browser FileSystem.

|Feature|Firefox|Chrome|Edge|Safari|IE|
|---|---|---|---|---|---|
|[IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)|yes|yes|yes|yes|no|

### Rejected

The following APIs were all considered in choosing a backend to support

|Rejected APIs|Reason|
|---|---|
|[File and Entries API](https://developer.mozilla.org/en-US/docs/Web/API/File_and_Directory_Entries_API)|Requires permission for each request|
|[Cache](https://developer.mozilla.org/en-US/docs/Web/API/Cache)|Requires a request URL|
|[SessionStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage)|Limited storage|
|[LocalStorage](https://developer.mozilla.org/en/docs/Web/API/Window/localStorage)|Limited storage|
|[Cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)|really?|
|[File System Access API](https://web.dev/file-system-access/)|Chromium only|
|[WebSQL](https://caniuse.com/#feat=sql-storage)|deprecated|
|[Application Cache](https://developer.mozilla.org/en-US/docs/Web/API/Window/applicationCache)|deprecated|

