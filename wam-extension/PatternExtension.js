class PatternExtension {

    constructor() {
        this.delegates = new Map()
    }

    setPatternDelegate(pluginId, delegate) {
        /* delegate is an object with methods : 
              getPatternList: () => PatternEntry[]
              createPattern: (id: string) => void
              deletePattern: (id: string) => void
              playPattern: (id: string | undefined) => void
              getPatternState: (id: string) => any
              setPatternState: (id: string, state: any) => any
        */

        if (delegate) {
            this.delegates.set(pluginId, delegate)
        } else {
            this.delegates.delete(pluginId)
        }
    }

    getPatternViewDelegate(pluginId) {
        return this.delegates.get(pluginId)
    }
}