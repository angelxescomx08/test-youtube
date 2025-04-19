import * as z from "zod";

z.email();
z.uuidv4();
z.uuidv7();
z.ipv4();
z.ipv6();
z.cidrv4();
z.cidrv6();
z.url();
z.e164();
z.base64();
z.base64url();
z.jwt();
z.lowercase();
z.iso.date();
z.iso.datetime();
z.iso.duration();
z.iso.time();

z.int(); // [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
z.float32(); // [-3.4028234663852886e38, 3.4028234663852886e38]
z.float64(); // [-1.7976931348623157e308, 1.7976931348623157e308]
z.int32(); // [-2147483648, 2147483647]
z.uint32(); // [0, 4294967295]
