function classnames(...args: any): string {
    const classes = []
    const hasOwn = {}.hasOwnProperty

    for (let i = 0; i < args.length; i++) {
        const arg: any = args[i]
        if (!Boolean(arg)) continue

        const argType = typeof arg

        if (argType === 'string' || argType === 'number') {
            classes.push(arg)
        } else if (Array.isArray(arg)) {
            if (arg.length > 0) {
                const inner = classnames.apply(null, arg as [])
                if (Boolean(inner)) {
                    classes.push(inner)
                }
            }
        } else if (argType === 'object') {
            if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
                classes.push(arg.toString())
                continue
            }

            for (const key in arg) {
                if (hasOwn.call(arg, key) && arg[key]) {
                    classes.push(key)
                }
            }
        }
    }

    return classes.join(' ')
}

export default classnames