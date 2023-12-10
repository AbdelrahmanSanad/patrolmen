import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <>
      <header className="mt-6 flex justify-around items-center flex-wrap ">
        <div>
          <svg
            width="70"
            height="60"
            viewBox="0 0 70 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <rect width="69.5455" height="60" fill="url(#pattern0)" />
            <defs>
              <pattern
                id="pattern0"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  xlinkHref="#image0_607_242"
                  transform="matrix(0.00456621 0 0 0.00529265 0 -0.002802)"
                />
              </pattern>
              <image
                id="image0_607_242"
                width="219"
                height="190"
                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANsAAAC+CAYAAAC8unqpAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQzMzVDODg3QUZFMjExRUJBNENGQjI2Q0ZFQTI2RDBGIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjQzMzVDODg4QUZFMjExRUJBNENGQjI2Q0ZFQTI2RDBGIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDMzNUM4ODVBRkUyMTFFQkE0Q0ZCMjZDRkVBMjZEMEYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NDMzNUM4ODZBRkUyMTFFQkE0Q0ZCMjZDRkVBMjZEMEYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz63gPAKAAAXKUlEQVR42uxdDYxc11W+65/EcdIkY8fOj+Mm3m2bNqEOME6AUmhijVWVQisIaxAiBJVqtgiEZP52pdAqAqnsFgULiZ/uAqXQihZPJKBJKWWn1FWTuglegpOSQJNdb9LEJT/ezU+brtskw/38zo3fvn33vv+Z92a+Tzqa3Xkzb9677373nHvOPecOdTodNcgYPbhS9E9s13K5lkvkFf9v03KRlq1atmg5V8t5Wi7Qco6WsyznelXLi1q+peXbIktaTvrkmyIntDwpf79S1M21DmxSRDxsYBNkxkYtb9AyomWXlmGf7BIi5YV1QsgLEnzne1oe07KgZV7Lcfkb8ogQlyDZStdWINXVWr5P5Botbyp5O5rB4A2W44taHtTykMjXtPyPlpf4yEm2brULSLVHS13kWi39aDNdKfJTAXMVhJvTclRe/0vMVoJky4TLtLxNyw/L6w9qOXuA22OdDDaQm30EfFjLV7Qckdeva+mw+8TD0CA6SEYPrmAkv8EnV7ArpAKcM1/WcljkgdaBTa+yWQacbJpgN+mXd2rZJ2ZTWQB3qPEkdsRh8bKWU1q+4/scNK3xVMLpAifJ67TU8BxLRL4vaPm8lllNvMdJscE0I+/o8u8ta/mGlie0PC6Cv+GKf1bkZIBQqQZM5YUQIAgp7BCz+FIZVIxntNaFe0YYY1TkGeWFOQjO2XLBKXEkQB6ROYx5XerSNXR85P1fx+cuVF54wpDvKuV5VK9W+YYnDP6N3YNkSwtoKXjlHlCeexzu8kfF5KsCnpPrnwvRjJizvlV5oQy8wvv6pozmKclGssUCTKCvKs/jdr+W/5T3+hHQjIsid/reh7b7fiEeQiA/JAQk2Ui2SGAlxcaQ918VLXVEnXFpP8qucTqmdo+IAeaFP6K88IgJlYSFSI61Dmz6Pzbh4JINKyLCljkdU15cjYgGHDp3iQCbhHA3aNkrRNxArUay2ci2jd0gNVa0BjusvBjbbaMHVxCKuFF5DiJigMmGOdelIe9vYTfIB5p4yEj4DFuCZHva8v5mMYdWenhtJjhtVvXDC3iWXJvB8+LMMCk2Js2GINlKOd+wAblmizn/3vnKS7FBgPly0ao7RC4Scm2R1/UpfwNxvqe0wBmBONsJ0eD4HwH04yLPsauTbN3ECcexK1OSDQmfb1ZeYBhucQSLR0S2duGe4Al8vYgLzwnpcI8LMqdCIP5h1b8hDZKth3CRaVgm+TZsFELtVl6qDQK/b9GysyL3jtUjPyASBFa6PCTkwyuC9sdEUxIkWyosRGg2g/WireDSvk7L9cpb1rSxT9sFpuzbRfx40kc85LL9R0QbEiRbLM22V5wkIFZdzMNBh5lfvsv3HhZXmyVfWGFzROaMRAwMUooNPHvw4A3xsec+iIF4WGlyt5YHWwc2vcJmGWCyCeFgBu0qwaXAi3hS5kVPy98r6kwuGwLw35XP4f9zxbx9nc/0g2z1SVnihS9ouUYT7gnSa3DNSCVzkKLJ9l2Z2zwm8rjv9Ukxu4qoaIU5pQkz7BS5XOajpvrX2V3qUydILZLtv7W8N6dzwYuHBcxwnyOPzLjTQaxemFHf8xE81IoR8oF0CFPAu/oWlb9X9RhLI5BshmxJ0REiIc3mmDrjoava6I37+IbI4cAxOISQy2bCGghxIL3m/BS/cz9pRbLF7Qgw81DE5j7led3g8n6xz9sFZu29In5NCPOzHpAoAh4hrUg2JRoKNT/O8b2HQC68aCZ3a57d4jVN+IjIpwME/JyYoyRbAgxcKbvRgyufUN6iXlSB+pLqXq2QfgFMTiz/ClvP+bSer13MJqJmOw3dGW4OkI+9IBneoewLp7/C5rFjHZuASIgbHce+xOahZisrsKplu8hFYqKd53NCnCVaxNSWXPHJ8wF5VnUnJ6/hOHaYj5Rk6wVQbgEl4l4feN0hx5BDd07Ov4m51FPqTI4b3PyL6kxgfVGImRZYqbLbcgyrYB7gYyfZigKWSCEobLZkerPv714sZr5Q5CrHZ6ABvy6CKmIIyqMOJrywUcF4mJC2taWHGcwm2fIA1iQi6Gty2q4RubSC93KRyNsC75vqztBOSKk5Kq8v+D6z13HeL7KbkGxJAIfRG5WXZIkVFKZK8CDscoN1k9eK+D220H5YPYMFAT/h+D7L10VgaFD31B49uDIkxLpOpC4EYy5bcixqE3IXm4GazYYJLR9mF8gFs2wCks2Fu3pENqTgYBEzto5CztdSQJAN7d+nzeA8eV4mrw3hAX+FLrwihLBTXrsZQ/08qUQzMsqUxHxkJOfTItUFnj2sKVxUXm7bogjI1Y1COiAklk0hpQYhB1P1y2wXdYVKXz4vCHggt2ozkuXyqNmc+Cctv5Xyu4hj+fPYQK6HhVS93kbqFdGekPtCjiNYjpw2U4YPr7vlNSkJ7yXRSLY4uCMG2eD6fjBEqtzBYMp+TcSPs4V88Egax9G1Qk4b/pU0ItlijcrKW2Vhy1T+OS2HBqg9EGu7X+TjPi0Iwl3vEwTNTXD7c6RRPAz0QmRt/mDC2nJ85EZ2kdNaEAm0f6blFuWtmMGyrXdruU2t3cmUoIPE6iTBSop7LIfhHbxUOhwRPmCxEajZYgOZxcctx+BOfxebiCDZ8gFU+987jv8Sm4jIA1wb6eGTWm61HHuP8mJWeZbZRoDalPdGqg2C0hf6XvFcNqvVXkBTuBWDg8lhQyEieEvhGUUo4hkRbopBspUWiJMhHnW9pY3gGPhIzHOBIFgnaILIO4VUl4nsUMWvv0ScDzE25LE9Ia9mq6hH5b0OHzvJ1it8zEI24P1a/sjXQeEVMEHhN6rVqzOwamOoBM/VtW/bS0K6R2WgwauJu32HXYFkKxqf0vLHavXWugYg1N8pLw8MBLtCVXuDDtzjbrU26/pV0X7IY/NvF8Vy4iRbrsDc5w6HQ+QXB6AN1slgAvl53/uYr5qtolBjk7lrKRuXOIOPsglCAQcREkc/qOUmNgfJlgeOiNlEhANz1tvZDDQj8wKWJf1lAeeFhxDu+SdEsH2U2ZvtpJhqJ8V5YcrVGXc/FgibSlzwZJ4rskXmkaZa1zbRQtvlFQ6S9Tnewz/KnI4g2XIBAtzwPF6Y4rtY1AzPnslhOy6yKERLW33qlAjwXMLnC+8ovKS7fGI8qUlDEB9h9yDZ8gS0CcIAv2k5jvWSyGN7REZ5/99lc5u/rM4kroYBmu9qkWvEKbLZ8llUO76X3YNkyxt/quWXlbefG3LXHpK/Ic/00X0+LoKcNFQUe5/js3/IbkGyFQGYflsH7J5vdRxDfhvrjGQEvZGEEjPyZxzHJ9lEJBuRD1DWz7YiBg6fO9hEJBuRHdiX4BcitBpr+JNsRA74PWWPxSGU8Qk2UT6gg6R7QIdG0BllFi6R14vl1eSxQUwBVgyEyC5Ayo7Z3AIBboQm4NJHvG3Z9wpBUBwBc1MENioHD7E215rPDyuWhCDZSoYhIVDYfmw7hVDbMlgStZTfQ8FYBNMXlVc4dkGdSa3B/7dFaLWP8dGSbL0ANIypLGz2YBv2yVklvOaNQnbIjyX87u3UaiRbr4DN2esDcq/QajN85PmCDpL4+N0Butc/UMzYJtl6iH/XcucA3Cfmc3/Dx00zstf4HeUlUa4v6PzfFoFWeSkwZ9okAmfMBcpLsSni+SFB9GU+apKt18AKf+S7/UaC78Aj+KSIP5cNAle9P6ftVMLrQZhgq8gWkct9Ypwjl8S0YrCd7z/wMZNsZcGHlJeKst1yHNs13SzEBKGeKvBaXhRZjPGcEYZAXA25bChgdJW8+jcVwY4+LHFHspUGz4s5+beW4zAxsX/Ap0p0zTAL50U+Gzi2WUiIepaH+XiLAx0k6YAlTHc7jv+alh+tyL28JObjnXysJFsZAVPrV8VkDAOcGH+tvNohBEGyZQSqB7tqcmBO9EE2E0Gy5YPfV+5qU+Na9rCZCJItO1Bu7v2O43BAfZzmJEGy5YMva/kLx3FUrfpQgvMhvQapNvAOXhmQbSpdiT2iBKDrPx+grMBPqtUxq6A5iZABVuFvF9KYYPTFQrDzE/4mvIhYbYLSeifl9WkRxPdOiGBRMXLbmG1NsvUFXhBz0laBCrG3qZx/c7PIthifRZwNK1ceU17pOrj5W3xsNCOrCuzs8lclHlRhhr5Dy3u1HOXjItmqDlRRXiz5NUIDH+ejItmqDqxTfF+Jr2+a5iPJ1k/4opY/L+F1IQh/gI+nt7Y8kT/gfXyn8uqV2IDUG5Nag8pYJpftRTkOp4vxIMKLea78jVonFwRkR8TAifOOKmZfk2x9iG9puUXmcPD+mfw1U2Lumz5SZQVI/dmIz3xAeRvVEyRbX+IekSKBGv2HlDtzHB7ST/JxcM5GpAeC4/+i3MHw+7T8OpuKZCPSA/O3u5SXfW0DMsSxM80pNhfJRqQDHCTY2/o6x2dQKOhnZZ5IkGxECqyX+de+iM8hcH03m4tkI9IB2d+o7DUa8Tlsx8udZ0g2IgPRECgfi/gctN6tbC6SjchGtA9EfK6t5VcUS9GVFoyzlX+OhsJBt0R8Di7+n1bcdYZkI1LhHC2f1vKeiM9hzeO7lbdqhSDZiITAesfPaPnxiM9hE4y9Wp5lk5FsRHKgRj/WOu6O+ByqG9+o5Rk2WTVAB0m58FYtX41BtIe03KC8UgcENRuRAtuVfcMO/xxtLzUaNRuRDV9Qbs8jVoW8nUQj2Yh8gN1vfjvk/X9WXu7a82wiko3ID7dr+RPf/x/VcpPyakUSnLMROQNZ3pdpuV956x2JimOo0+HqHoKgGUkQJBtBECQbQZBsBEGyEQRBshEEyUYQBMlGECQbQZBsBEGQbARBshEEQbIRBMlGECQbQRAkG0GQbARBkGwEQbIRBMlGEATJRhAkG0EQJBtBkGwEMdhkwz5fnRCZHhoaUi7BZyzfnY/6buA8s3mcx3Ju2/2llflu3Y/lPEtaahnaY9JybcNZ21rOP+5ou2aVnmPEs0wqTWq26qEmhEmMTqczLGQoEuMpj9GMJEqJpiZOPcX3pou8KH1NTRkMbBjWn2mQbETVMJ2CCEV39GZGzUeyEaVEXRNoPCbRakV3ctFYcbRtI6VWJtnKDj3JHRmyQB9uW77WHrJjpES3Ny7zsDgaZ7joa8lZA5b9Obblt+PKDDVbtRGpsYSMk0VehPxGmIm67Jhz1qjZiCo6Sxq9copEaLUph9ZpkmxE3zhLNAlHi3aKiIYatRxuwXxymMA1ko2oGoYtzpLJLvy2zd2POc2ClpbFnHSRtAqAoyduQJtk6zOscpYI+Ya78buW92cC5mSS71KzEaXBgkVTTPocFmFarW35bloT0qbVlkWj+c1Jm0ZukGxEmTFlIc2ozNNs5uNYASak7fpeA8xJZXeUjJNs7mU3aUZeIl/YiDNtmQtNSKfPS6u5gtitCLMyOPepDwrZbA8gjr1va6RlcqFYaOK0LR04bJCEo2KqS1oNmO8EoN87lPJcZUWSoPZrZJuzEcm1OkHctnVqtp5iIubANpHnj0q/yNOTOBBBbhfZouxp17E2edAV7bYcg0itgLMiDxQxz2oOAtnayr2sZjrgUq7hPUeDL4iJQ3SHcDMRg1veWq2o+FjfB7nXyeg4FTHizPts76WIUSjPucFwJz7m6Swp1ini6w9FkKJqQe4kQe3TmeHrZHQEQfIwNVoy0hLd1W4LIRqsCKeIy9xzrbD3r9Df4rCk+joMsMH3wPZroqLeQiMD0faz6/eMcFPeQPsa5vL+DQli25xmMzGvc1mfB4PApMWSafTrNGRdoCH2qeSBT4xSYyRaOQjnkyI6bNMxT09iGc102flSPrKZCbeo+zFldy0bLxhItoWmY/9DVqbUs2g1v3ZT7iB3Xy7hGgqYHgRBdEuzEQRBshEEyUYQBMlGECQbQZBsBEGQbARBshEEQbIRBMlGECQbQRAkG0GQbARBxCVb0s3BkWR6urx1hg3JkQa/FDjvoR5sZj6bw/kzt4f8blPOsxTyG0flWCOnDeCbGa/Vfz78XctyPjnneNxrzKMPxDz3kuu5WjAd+C1v4xOk2KB+Ryc9ZmNuyLcKqEVvOd9wjO9mud4115/z+Q8lbQ9HW1jrrUjWdJLfCN5TpmpWIeebzHg+ZGkvxb3GPPpAgnMftRUjEv4EZTrwffyfixmJRL/5FAl/toaseqYukiyPxmkPVAKWQkVJOyrIPJ12oCsI4xmvZVwVU0goD9RVDvvcbbC8jxT3OccPh1VBwoi+J041p4haFqhXPyHZvDbMRHTEIJFR88J2vjhFTpO2Ry2qPYSMs45rmgqcb9wy0IFw+wqoopUG6JD7Umi1hspeN9L1jHIZRGGBZCqiZDEjmxb16FKVHaknGec3j4aoaT/GM9xPI41pmtXkStIeotFsJmjd8RujIW1lzMpaj83I1OdNc6687yeBiTraCzNyTK2tEdmM8dCDGzKgMM3+qpuSesRL0h5hde9PF03SMuf4DVQw2xOi2YdVd7bzjWtO1hJ07G7tI5eb9k67EUjWOduMxbSJss1XnUNMIH91plqeI1UXMRXVHhYTeiJJ0SQhdivEzClDoZzhuIOlkLJqA6uZItS6TbaFkDlPzeVxCnQ+fwm0mT7Qbstq7aYitYj7aqecB4yFtH1ZKgrHdZZMltgpEuznwQHlULfJZmN+bK3m66httbpm/XDQPq7QyBf6v5gfwwmcPVHEnioR2dohzhKXVqsHnCKuDRPLYLEEzftG0nDHhhxMhlrEKOA3GZoBj9tMiEfJr/maKp+y6F2BjOau9qjH6KRZOjjM77pr3ldwhxz2DSbojE2HeTwdoqmzWDONBKbdXIoitvCyHg0MluNqree4MLI1E3SeNe74oHsfDyYwYW5UrBx1VHvUQh56lo0jFxJaFkUDhJkNmJOt4D3KvLUemLe3s3ihRavH1ewTSQc5KZu+XwgXNIXbKkbYIYsZOW1xdizHnAi3YjpdKmFKWrbRakWQKdMOrZZz98yzF7Ib6hpnifSFyUAbTFThGYvFEFZmfzZOu9s0W8MxQtqC2i51Oho434wjCDujVq8mgPt8qsdBW5eJ4mqPqE5Uy0jwWkxt121z0v+8od38zzu4UmQqo3bvNuFaWHQRGDBq4jDZE/XA8lhntuRyO4ecvxFxTZNp190VFNROg0bIeZshn6tlIFtYcLwe857yDmo3fMfGw9afyvrHVYsZAuecLWlQuxnymUOWRQmFro2EObjHNq+yxJVmIxaIBs2xKu25jPYYsbTHnMWKSK1xg9q0R86R4Ogf9N41pB9Mh8ydqoqxkOc56nLypCVbWxpqRFY9LERMXLOipqqx53Lb1R5ChIUYTpW4JmTceXCvOmNwjt8IOkWqyjQxffeHzLsnbQPoOkdDDTlkn9jmC1EmXcaR249eBrnHLLtojoTM7aKucyrFd2wOqlpZySYDy4zDMVRlrWbucUGFL7weTuIgyQvNEI3YTkgw06FqEXGbnjR2yGR5UtzdNu02E7IeEN9Zjntv4vkMWgytEmqKiRDnWOWcIhGYk/ucjPPg0q76V6693UImw50ckirnY3yn66v+w7IYUjg2qr7qv2Gbs8dtmxDHQmkdJAH+hDn11jhIitRsYWsAk7qlW4ERo6x7LsN29w8EdVfuE0ws5KCptflspwOz0HIqXj6bElN+XwpN0UjodEqz6sJo8lHfdKIo87GRwonWztGhNCH3WO+qZsNNh6S4j6YcZaajyhj0WrNZtHAnKhXDZGp3oyRFDuGM8TSazWfljMewELJotjRo5qjZTL+ft2m2oqprNQN2etINzl2T/kbafKKC529hi1Wno5wIWkZSjPYL4rQpS4Z25NwW7TMAe6/bPJROb2QWezfM5JnJ8KDC1p2VNf0muJSnHid7XToivJtjQrxlx0QcoYWRAei4VXaYjIUd+H8BBgBfqJWsagSlywAAAABJRU5ErkJggg=="
              />
            </defs>
          </svg>
        </div>
        <nav className="text-nav-color text-base  font-Poppins space-x-9">
          <Link href={"/home"} className="hover:text-white">
            Home
          </Link>
          <Link href={"/about"} className="hover:text-white">
            About
          </Link>
          <Link href={"/features"} className="hover:text-white">
            Features
          </Link>
          <Link href={"/support"} className="hover:text-white">
            Support
          </Link>
          <Link href={"/contactUs"} className="hover:text-white">
            Contact Us
          </Link>
        </nav>
        <div className="w-72 h-10 space-x-6 text-base  font-Poppins">
          <Link
            href={"#"}
            className=" text-white h-10 w-32 bg-btn-primary rounded-md inline-flex justify-center items-center"
          >
            sign Up
          </Link>
          <Link
            href={"#"}
            className=" h-10 w-32 rounded-md inline-flex justify-center items-center border border-btn-primary text-btn-primary"
          >
            login
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
